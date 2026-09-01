const categories = [
  ['psych','心理學'],['business','商業理財'],['tech','科技趨勢'],['art','設計創意'],
  ['history','歷史人文'],['lit','文學小說'],['phil','哲學思辨'],['work','自我成長'],
  ['reading','溝通表達'],['health','健康生活'],['society','社會科學'],['misc','旅行紀實'],['invest','投資金融']
];

const state = { books: [], covers: {}, filtered: [], category: 'all', query: '', selected: null, visibleCount: 60 };
const $ = (selector) => document.querySelector(selector);
const DATA_VERSION = '20260902-1';

async function loadBooks(){
  const groups = await Promise.all(categories.map(async ([key,label]) => {
    const response = await fetch(`data/${key}.json?v=${DATA_VERSION}`);
    if(!response.ok) throw new Error(`無法讀取 ${key}.json`);
    return (await response.json()).map(book => ({...book, category:key, categoryLabel:label}));
  }));
  state.books = groups.flat().sort((a,b) => Number(a.n)-Number(b.n));
  const coverResponse = await fetch(`data/covers.json?v=${DATA_VERSION}`);
  if(coverResponse.ok) state.covers = await coverResponse.json();
  state.selected = state.books.at(-1);
  $('#totalCount').textContent = state.books.length.toLocaleString('en-US');
  renderFilters();
  renderCatalogControls();
  applyFilters();
}

function renderCatalogControls(){
  $('#catalogCategory').innerHTML = [['all','全部分類'],...categories].map(([key,label]) => `<option value="${key}">${label}</option>`).join('');
}

function renderFilters(){
  const counts = Object.fromEntries(categories.map(([key]) => [key,state.books.filter(b => b.category === key).length]));
  $('#categoryFilters').innerHTML = [['all','全部'],...categories].map(([key,label],i) =>
    `<button class="filter ${key==='all'?'active':''}" data-category="${key}">${String(i).padStart(2,'0')} ${label} <small>${key==='all'?state.books.length:counts[key]}</small></button>`
  ).join('');
  $('#categoryFilters').addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if(!button) return;
    updateCategory(button.dataset.category);
  });
}

function applyFilters(){
  const q = state.query.trim().toLocaleLowerCase('zh-Hant');
  state.filtered = state.books.filter(book => (state.category === 'all' || book.category === state.category) &&
    (!q || `${book.n} ${book.t} ${book.a}`.toLocaleLowerCase('zh-Hant').includes(q)));
  $('#resultStatus').textContent = q || state.category !== 'all' ? `FOUND ${state.filtered.length} BOOKS` : 'CURATED PERSONAL LIBRARY — COMPLETE ON-SITE ARCHIVE';
  $('#catalogCount').textContent = state.filtered.length.toLocaleString('en-US');
  renderShelf();
  renderLatest();
  renderAllBooks();
}

function renderAllBooks(){
  const visible = state.filtered.slice().reverse().slice(0,state.visibleCount);
  $('#allBooksList').innerHTML = visible.length ? visible.map(book => `<article class="catalog-row">
    <a class="catalog-cover" href="book.html?id=${encodeURIComponent(book.n)}" aria-label="閱讀《${escapeHtml(book.t)}》完整筆記">${state.covers[book.n]?`<img src="${escapeHtml(state.covers[book.n])}" alt="" loading="lazy">`:''}<span>${book.n}</span></a>
    <a class="catalog-title" href="book.html?id=${encodeURIComponent(book.n)}"><strong>${escapeHtml(book.t)}</strong><small>${escapeHtml(book.a || '作者待補')}</small></a>
    <span class="catalog-category">${escapeHtml(book.categoryLabel)}</span>
    <a class="catalog-open" href="book.html?id=${encodeURIComponent(book.n)}">閱讀完整頁面 ↗</a>
  </article>`).join('') : '<p class="catalog-empty">沒有符合條件的書。</p>';
  const more = state.visibleCount < state.filtered.length;
  $('#loadMoreBooks').hidden = !more;
  if(more) $('#loadMoreBooks').textContent = `顯示更多書籍（尚有 ${state.filtered.length-state.visibleCount} 本）↓`;
}

function renderShelf(){
  const booksWithCovers = state.filtered.filter(book => state.covers[book.n]);
  const source = (booksWithCovers.length ? booksWithCovers : state.filtered).slice(-14).reverse();
  if(source.length && !source.some(b => b.n===state.selected?.n)) state.selected = source[0];
  $('#bookShelf').innerHTML = source.length ? source.map(book =>
    `<button class="book-3d ${book.n===state.selected?.n?'active':''}" data-book="${book.n}" title="${escapeHtml(book.t)} — ${escapeHtml(book.a || '作者待補')}"><span class="book-object"><span class="book-front"><span class="cover-fallback"><b>${escapeHtml(book.t)}</b><small>${escapeHtml(book.a || 'RAUM+ ARCHIVE')}</small></span>${state.covers[book.n]?`<img src="${escapeHtml(state.covers[book.n])}" alt="《${escapeHtml(book.t)}》真實書封" loading="lazy">`:''}</span></span><span class="book-caption">NO. ${book.n}</span></button>`
  ).join('') : '<p>沒有符合條件的書。</p>';
  renderSelected();
}

function renderSelected(){
  const book = state.selected;
  if(!book){ $('#selectedBook').innerHTML = '<p>請調整搜尋條件。</p>'; return; }
  $('#selectedBook').innerHTML = `<span class="num">NO. ${book.n}</span><h3>${escapeHtml(book.t)}</h3><p class="author">${escapeHtml(book.a || '作者待補')}</p><span class="category">${escapeHtml(book.categoryLabel)} / RAUM+ ARCHIVE</span><div class="book-actions"><button class="read-note" data-read-note="${book.n}">快速閱讀筆記 →</button><a href="book.html?id=${encodeURIComponent(book.n)}">開啟完整頁面 ↗</a>${book.y?`<a href="${escapeHtml(book.y)}" target="_blank" rel="noreferrer">${book.ys==='playlist'?'我的書摘影片':'搜尋相關影片'} ↗</a>`:''}</div>`;
  renderPath();
}

function selectBook(number){
  const book = state.books.find(item => item.n === number);
  if(!book) return;
  state.selected = book;
  renderSelected();
  document.querySelectorAll('.book-3d').forEach(el => el.classList.toggle('active',el.dataset.book===number));
}

function renderLatest(){
  const books = state.filtered.slice(-8).reverse();
  $('#latestList').innerHTML = books.map(book => `<button class="latest-row" data-book="${book.n}"><span class="n">${book.n}</span><span>${escapeHtml(book.t)}</span><span class="a">${escapeHtml(book.a || '作者待補')}</span></button>`).join('');
}

function renderPath(){
  if(!state.selected) return;
  const related = state.books.filter(b => b.category===state.selected.category && b.n!==state.selected.n);
  const seed = Number(state.selected.n);
  const chosen = [state.selected,...Array.from({length:5},(_,i)=>related[(seed*(i+3)+i*17)%related.length]).filter(Boolean)];
  const points = [[50,50],[15,22],[84,20],[18,78],[82,79],[52,88]];
  const lines = [[0,1],[0,2],[0,3],[0,4],[0,5],[3,5],[4,5]];
  $('#pathViz').innerHTML = lines.map(([a,b]) => line(points[a],points[b])).join('') + chosen.map((book,i) =>
    `<button class="path-node ${i===0?'active':''}" data-book="${book.n}" style="left:${points[i][0]}%;top:${points[i][1]}%">${escapeHtml(book.t.length>12?book.t.slice(0,11)+'…':book.t)}</button>`
  ).join('');
}

function line([x1,y1],[x2,y2]){
  const dx=x2-x1,dy=y2-y1,length=Math.sqrt(dx*dx+dy*dy),angle=Math.atan2(dy,dx)*180/Math.PI;
  return `<span class="path-line" style="left:${x1}%;top:${y1}%;width:${length}%;transform:rotate(${angle}deg)"></span>`;
}

function escapeHtml(value=''){ return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }

const noteCache = new Map();
function noteBucket(id){ let hash=5381; for(const char of id) hash=((hash<<5)+hash)^char.charCodeAt(0); return (hash>>>0)%128; }
async function openNote(number){
  const book=state.books.find(item=>item.n===number);
  if(!book) return;
  $('#noteNumber').textContent=`NO. ${book.n} / ${book.categoryLabel}`;
  $('#noteTitle').textContent=book.t;
  $('#noteContent').innerHTML='<p class="note-loading">正在載入完整筆記…</p>';
  $('#noteDialog').showModal();
  try{
    const bucket=String(noteBucket(book.u)).padStart(3,'0');
    if(!noteCache.has(bucket)){
      const response=await fetch(`notes/chunk-${bucket}.json?v=${DATA_VERSION}`);
      if(!response.ok) throw new Error('筆記資料尚未同步');
      noteCache.set(bucket,await response.json());
    }
    let page=noteCache.get(bucket)[book.u];
    if(!page){
      const repairKey=`repair-${bucket}`;
      if(!noteCache.has(repairKey)){
        const response=await fetch(`notes/repair-${bucket}.json?v=${DATA_VERSION}`);
        noteCache.set(repairKey,response.ok?await response.json():{});
      }
      page=noteCache.get(repairKey)[book.u];
    }
    if(!page) throw new Error('找不到這本書的筆記');
    $('#noteContent').innerHTML=renderFeaturedVideo(book)+renderMarkdown(extractBook(page,book.n));
  }catch(error){ $('#noteContent').innerHTML=`<p class="note-error">${escapeHtml(error.message)}</p>`; }
}
function extractBook(markdown,number){
  const marker=new RegExp(`^#\\s+${number}｜`,'m');
  const match=marker.exec(markdown);
  if(!match) return markdown;
  const rest=markdown.slice(match.index);
  const next=/^#\s+\d{4}｜/m.exec(rest.slice(match[0].length));
  return next?rest.slice(0,match[0].length+next.index):rest;
}
function renderMarkdown(markdown){
  const safe=escapeHtml(markdown).replace(/寶貝[，,]?/g,'').replace(/\\([:$])/g,'$1');
  const inline=text=>text.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>').replace(/`(.+?)`/g,'<code>$1</code>').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer">$1 ↗</a>');
  const linkBookReferences=text=>text.replace(/(\d{4})｜/g,'<a class="book-ref" href="book.html?id=$1" aria-label="開啟第 $1 本書">$1｜</a>');
  const lines=safe.split('\n'); let html='',inList=false;
  for(const raw of lines){ const line=raw.trim();
    if(/^(?:[-*]\s+)?(?:\*\*)?(?:來源|字數|最後整理|資料狀態|資料識別碼)[：:]/.test(line)) continue;
    if(/^(?:&lt;empty-block\s*\/?&gt;|-|#{1,6}|(?:#{1,6}\s+)?Normal People)$/i.test(line)) continue;
    if(/^!\[(?:原書書封|原書封面)/.test(line)) continue;
    const image=line.match(/^!\[([^\]]*)\]\((https?:\/\/[^)]+)\)$/);
    const embed=line.match(/^&lt;embed src=&quot;(https?:\/\/[^&]+)&quot;&gt;(?:&lt;\/embed&gt;)?$/);
    if(image){ if(inList){html+='</ul>';inList=false;} html+=`<figure><img src="${image[2]}" alt="${image[1]}" loading="lazy"><figcaption>${image[1]}</figcaption></figure>`; }
    else if(embed){ if(inList){html+='</ul>';inList=false;} html+=renderEmbed(embed[1]); }
    else if(/^#{1,4}\s/.test(line)){ if(inList){html+='</ul>';inList=false;} const level=Math.min(4,(line.match(/^#+/)||[''])[0].length); html+=`<h${level}>${inline(line.replace(/^#+\s*/,''))}</h${level}>`; }
    else if(/^[-*]\s+/.test(line)){ if(!inList){html+='<ul>';inList=true;} const content=inline(line.replace(/^[-*]\s+/,'')); const isBookRelation=/^[-*]\s+\*\*(?:同作者|相關書目)：\*\*/.test(line); html+=`<li>${isBookRelation?linkBookReferences(content):content}</li>`; }
    else if(line==='---'){ if(inList){html+='</ul>';inList=false;} html+='<hr>'; }
    else if(line){ if(inList){html+='</ul>';inList=false;} html+=`<p>${inline(line)}</p>`; }
  }
  return html+(inList?'</ul>':'');
}
function renderEmbed(url){
  try{
    const parsed=new URL(url); let id='';
    if(parsed.hostname.includes('youtu.be')) id=parsed.pathname.slice(1);
    if(parsed.hostname.includes('youtube.com')) id=parsed.searchParams.get('v')||parsed.pathname.split('/').filter(Boolean).at(-1)||'';
    if(id && /^[\w-]{6,}$/.test(id)) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube 影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><a class="media-link" href="${url}" target="_blank" rel="noreferrer">在 YouTube 開啟 ↗</a>`;
    return `<p><a href="${url}" target="_blank" rel="noreferrer">開啟相關資料 ↗</a></p>`;
  }catch{return '';}
}
function renderFeaturedVideo(book){
  if(!book.y) return '';
  if(book.ys!=='playlist') return `<section class="note-video-search"><p>尚未在我的播放清單找到精確影片。</p><a href="${escapeHtml(book.y)}" target="_blank" rel="noreferrer">以「${escapeHtml(book.t)}＋書摘」廣泛搜尋 YouTube ↗</a></section>`;
  return `<section class="note-featured-video"><p class="note-video-label">RAUM+ / 我的書摘影片</p>${renderEmbed(book.y)}</section>`;
}

function updateQuery(value){
  state.query=value; state.visibleCount=60;
  $('#searchInput').value=value; $('#catalogSearchInput').value=value;
  applyFilters();
}
function updateCategory(value){
  state.category=value; state.visibleCount=60;
  $('#catalogCategory').value=value;
  document.querySelectorAll('.filter').forEach(el => el.classList.toggle('active',el.dataset.category===value));
  applyFilters();
}
$('#searchInput').addEventListener('input', event => updateQuery(event.target.value));
$('#catalogSearchInput').addEventListener('input', event => updateQuery(event.target.value));
$('#catalogCategory').addEventListener('change', event => updateCategory(event.target.value));
document.addEventListener('click', event => { const book=event.target.closest('[data-book]'); if(book) selectBook(book.dataset.book); const note=event.target.closest('[data-read-note]'); if(note) openNote(note.dataset.readNote); });
document.addEventListener('error',event=>{ if(event.target.matches?.('.book-front img')) event.target.remove(); },true);
document.addEventListener('keydown', event => { if(event.key==='/' && document.activeElement!==$('#searchInput')){ event.preventDefault(); $('#searchInput').focus(); } });
$('#showAll').addEventListener('click', () => { updateCategory('all'); updateQuery(''); $('#all-books').scrollIntoView(); });
$('#loadMoreBooks').addEventListener('click',()=>{ state.visibleCount+=60; renderAllBooks(); });
$('#closeNote').addEventListener('click',()=>$('#noteDialog').close());
$('#noteDialog').addEventListener('click',event=>{ if(event.target===$('#noteDialog')) $('#noteDialog').close(); });

loadBooks().catch(error => { $('#resultStatus').textContent=`資料載入失敗：${error.message}`; console.error(error); });

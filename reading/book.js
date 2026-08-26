const categories = [
  ['psych','心理學'],['business','商業理財'],['tech','科技趨勢'],['art','設計創意'],
  ['history','歷史人文'],['lit','文學小說'],['phil','哲學思辨'],['work','自我成長'],
  ['reading','溝通表達'],['health','健康生活'],['society','社會科學'],['misc','旅行紀實'],['invest','投資金融']
];
const $ = selector => document.querySelector(selector);
const escapeHtml = (value='') => String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const DATA_VERSION = '20260826-1';
function noteBucket(id){ let hash=5381; for(const char of id) hash=((hash<<5)+hash)^char.charCodeAt(0); return (hash>>>0)%128; }

async function loadBookPage(){
  const number=new URLSearchParams(location.search).get('id');
  const groups=await Promise.all(categories.map(async ([key,label])=>{
    const response=await fetch(`data/${key}.json?v=${DATA_VERSION}`); if(!response.ok) throw new Error('無法讀取書庫資料');
    return (await response.json()).map(book=>({...book,category:key,categoryLabel:label}));
  }));
  const book=groups.flat().find(item=>item.n===number);
  if(!book) throw new Error('找不到這本書，請返回所有書單重新選擇。');
  const coversResponse=await fetch(`data/covers.json?v=${DATA_VERSION}`);
  const covers=coversResponse.ok?await coversResponse.json():{};
  document.title=`${book.t}｜RAUM+ Reading Archive`;
  document.querySelector('meta[name="description"]').content=`《${book.t}》完整閱讀筆記，作者：${book.a||'作者待補'}。`;
  $('#bookPage').innerHTML=`<section class="book-page-hero">
    <div class="book-page-cover">${covers[book.n]?`<img src="${escapeHtml(covers[book.n])}" alt="《${escapeHtml(book.t)}》書封">`:`<span>NO COVER<br>NO. ${book.n}</span>`}</div>
    <div class="book-page-meta"><span class="num">NO. ${book.n} / COMPLETE NOTE</span><h1>${escapeHtml(book.t)}</h1><p class="author">${escapeHtml(book.a||'作者待補')}</p><span class="category">${escapeHtml(book.categoryLabel)} / RAUM+ ARCHIVE</span><div class="book-page-actions"><button id="copyLink" type="button">複製本頁連結</button>${book.y?`<a href="${escapeHtml(book.y)}" target="_blank" rel="noreferrer">${book.ys==='playlist'?'我的書摘影片':'搜尋相關影片'} ↗</a>`:''}</div></div>
  </section>${renderFeaturedVideo(book)}<article class="book-page-note"><p class="book-page-note-heading">FULL READING NOTE / 完整閱讀筆記</p><div id="fullNote" class="note-content"><p class="note-loading">正在載入完整筆記…</p></div></article>`;
  $('#copyLink').addEventListener('click',copyPageLink);
  await loadNote(book);
}

async function copyPageLink(){
  try{ await navigator.clipboard.writeText(location.href); $('#copyLink').textContent='已複製連結 ✓'; }
  catch{ $('#copyLink').textContent='請複製瀏覽器網址'; }
}

async function loadNote(book){
  const bucket=String(noteBucket(book.u)).padStart(3,'0');
  const response=await fetch(`notes/chunk-${bucket}.json?v=${DATA_VERSION}`);
  if(!response.ok) throw new Error('筆記資料尚未同步');
  let page=(await response.json())[book.u];
  if(!page){ const repair=await fetch(`notes/repair-${bucket}.json?v=${DATA_VERSION}`); if(repair.ok) page=(await repair.json())[book.u]; }
  if(!page) throw new Error('找不到這本書的筆記');
  $('#fullNote').innerHTML=renderMarkdown(extractBook(page,book.n));
}

function extractBook(markdown,number){
  const match=new RegExp(`^#\\s+${number}｜`,'m').exec(markdown);
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
  try{ const parsed=new URL(url); let id='';
    if(parsed.hostname.includes('youtu.be')) id=parsed.pathname.slice(1);
    if(parsed.hostname.includes('youtube.com')) id=parsed.searchParams.get('v')||parsed.pathname.split('/').filter(Boolean).at(-1)||'';
    if(id&&/^[\w-]{6,}$/.test(id)) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube 影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><a class="media-link" href="${url}" target="_blank" rel="noreferrer">在 YouTube 開啟 ↗</a>`;
    return `<p><a href="${url}" target="_blank" rel="noreferrer">開啟相關資料 ↗</a></p>`;
  }catch{return '';}
}

function renderFeaturedVideo(book){
  if(!book.y) return '';
  if(book.ys!=='playlist') return `<section class="book-page-video book-page-video-search"><p class="book-page-video-label">YOUTUBE / 相關書摘</p><h2>尚未在我的播放清單找到精確影片</h2><a href="${escapeHtml(book.y)}" target="_blank" rel="noreferrer">以「${escapeHtml(book.t)}＋書摘」廣泛搜尋 YouTube ↗</a></section>`;
  return `<section class="book-page-video"><p class="book-page-video-label">RAUM+ / 我的書摘影片</p>${renderEmbed(book.y)}</section>`;
}

loadBookPage().catch(error=>{ $('#bookPage').innerHTML=`<p class="book-page-error">${escapeHtml(error.message)}<br><br><a href="./#all-books">← 返回所有書單</a></p>`; console.error(error); });

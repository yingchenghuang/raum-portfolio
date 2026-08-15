const categories = [
  ['psych','心理學'],['business','商業理財'],['tech','科技趨勢'],['art','設計創意'],
  ['history','歷史人文'],['lit','文學小說'],['phil','哲學思辨'],['work','自我成長'],
  ['reading','溝通表達'],['health','健康生活'],['society','社會科學'],['misc','旅行紀實'],['invest','投資金融']
];

const state = { books: [], filtered: [], category: 'all', query: '', selected: null };
const $ = (selector) => document.querySelector(selector);

async function loadBooks(){
  const groups = await Promise.all(categories.map(async ([key,label]) => {
    const response = await fetch(`data/${key}.json`);
    if(!response.ok) throw new Error(`無法讀取 ${key}.json`);
    return (await response.json()).map(book => ({...book, category:key, categoryLabel:label}));
  }));
  state.books = groups.flat().sort((a,b) => Number(a.n)-Number(b.n));
  state.selected = state.books.at(-1);
  $('#totalCount').textContent = state.books.length.toLocaleString('en-US');
  renderFilters();
  applyFilters();
}

function renderFilters(){
  const counts = Object.fromEntries(categories.map(([key]) => [key,state.books.filter(b => b.category === key).length]));
  $('#categoryFilters').innerHTML = [['all','全部'],...categories].map(([key,label],i) =>
    `<button class="filter ${key==='all'?'active':''}" data-category="${key}">${String(i).padStart(2,'0')} ${label} <small>${key==='all'?state.books.length:counts[key]}</small></button>`
  ).join('');
  $('#categoryFilters').addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if(!button) return;
    state.category = button.dataset.category;
    document.querySelectorAll('.filter').forEach(el => el.classList.toggle('active',el===button));
    applyFilters();
  });
}

function applyFilters(){
  const q = state.query.trim().toLocaleLowerCase('zh-Hant');
  state.filtered = state.books.filter(book => (state.category === 'all' || book.category === state.category) &&
    (!q || `${book.n} ${book.t} ${book.a}`.toLocaleLowerCase('zh-Hant').includes(q)));
  $('#resultStatus').textContent = q || state.category !== 'all' ? `FOUND ${state.filtered.length} BOOKS` : 'CURATED PERSONAL LIBRARY — UPDATED FROM NOTION';
  renderShelf();
  renderLatest();
}

function renderShelf(){
  const source = state.filtered.slice(-24).reverse();
  $('#bookShelf').innerHTML = source.length ? source.map(book =>
    `<button class="spine ${book.n===state.selected?.n?'active':''}" data-book="${book.n}" title="${escapeHtml(book.t)}">${escapeHtml(book.t)}<small>${escapeHtml(book.a || '作者待補')}</small></button>`
  ).join('') : '<p>沒有符合條件的書。</p>';
  if(source.length && !source.some(b => b.n===state.selected?.n)) state.selected = source[0];
  renderSelected();
}

function renderSelected(){
  const book = state.selected;
  if(!book){ $('#selectedBook').innerHTML = '<p>請調整搜尋條件。</p>'; return; }
  const notion = `https://app.notion.com/p/${book.u}`;
  $('#selectedBook').innerHTML = `<span class="num">NO. ${book.n}</span><h3>${escapeHtml(book.t)}</h3><p class="author">${escapeHtml(book.a || '作者待補')}</p><span class="category">${escapeHtml(book.categoryLabel)} / RAUM+ ARCHIVE</span><div class="book-actions"><a href="${notion}" target="_blank" rel="noreferrer">開啟完整筆記 ↗</a>${book.y?`<a href="${book.y}" target="_blank" rel="noreferrer">相關影片 ↗</a>`:''}</div>`;
  renderPath();
}

function selectBook(number){
  const book = state.books.find(item => item.n === number);
  if(!book) return;
  state.selected = book;
  renderSelected();
  document.querySelectorAll('.spine').forEach(el => el.classList.toggle('active',el.dataset.book===number));
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

$('#searchInput').addEventListener('input', event => { state.query=event.target.value; applyFilters(); });
document.addEventListener('click', event => { const book=event.target.closest('[data-book]'); if(book) selectBook(book.dataset.book); });
document.addEventListener('keydown', event => { if(event.key==='/' && document.activeElement!==$('#searchInput')){ event.preventDefault(); $('#searchInput').focus(); } });
$('#showAll').addEventListener('click', () => { state.category='all'; state.query=''; $('#searchInput').value=''; document.querySelectorAll('.filter').forEach((el,i)=>el.classList.toggle('active',i===0)); applyFilters(); $('#library').scrollIntoView(); });

loadBooks().catch(error => { $('#resultStatus').textContent=`資料載入失敗：${error.message}`; console.error(error); });

// --- Data ---
const DATA = [
  { id: 1, name: "Porthminster Beach Cafe", cuisine: ["Seafood","International"], neighbourhood: "Porthminster Beach", price: "£££", address: "Porthminster Beach, St Ives, TR26 1LX", website: "https://www.porthminstercafe.co.uk/", image: "https://i.ibb.co/b5Qmt6hg/IMG-1799.jpg", notes: "Iconic beach-front restaurant on St Ives Bay." },
  { id: 2, name: "Porthmeor Beach Cafe", cuisine: ["Seafood","Tapas"], neighbourhood: "Porthmeor Beach", price: "£££", address: "Porthmeor Beach, St Ives, TR26 1JZ", website: "https://www.porthmeor-beach.co.uk/", image: "https://i.ibb.co/WWxNBct6/IMG-1797.jpg", notes: "Modern beach cafe with small plates and sunset views." },
  { id: 3, name: "Ardor", cuisine: ["Modern British"], neighbourhood: "Fore Street", price: "£££", address: "Fore St, St Ives TR26", website: "https://www.ardorstives.co.uk/", image: "https://i.ibb.co/RkZhdZg5/IMG-1779.jpg", notes: "Contemporary British plates with local produce." },
  { id: 4, name: "The Mermaid Seafood", cuisine: ["Seafood"], neighbourhood: "Fish Street", price: "£££", address: "Fish St, St Ives", website: "https://www.mermaidstives.co.uk/", image: "https://i.ibb.co/GQ40G6w8/IMG-1780.jpg", notes: "Charming seafood restaurant with a rustic maritime atmosphere and fresh local catches." },
  { id: 5, name: "Reef & Beef St Ives", cuisine: ["Steakhouse","Seafood"], neighbourhood: "The Wharf", price: "£££", address: "The Wharf, St Ives", website: null, image: "https://i.ibb.co/MDyZPThd/IMG-1781.jpg", notes: "Surf & turf style grill by the harbour." },
  { id: 6, name: "Blas Burgerworks", cuisine: ["Gourmet Burgers"], neighbourhood: "St Ives Town", price: "££", address: "The Warren, St Ives", website: "https://www.blasburgerworks.co.uk/", image: "https://i.ibb.co/cK1Jp6qG/IMG-1782.jpg", notes: "Famous for locally sourced gourmet burgers served in a cozy stone building." },
  { id: 7, name: "Talay Thai Kitchen", cuisine: ["Thai"], neighbourhood: "The Wharf", price: "££", address: "Wharf Rd, St Ives", website: "https://www.talay.co.uk/", image: "https://i.ibb.co/hkW3n7V/IMG-1783.jpg", notes: "Thai small plates with sea views." },
  { id: 8, name: "Peppers Pasta", cuisine: ["Italian","Pizza","Pasta"], neighbourhood: "Fore Street", price: "££", address: "Fore St, St Ives", website: "https://www.peppers-stives.co.uk/", image: "https://i.ibb.co/hJfM0f3s/Peppers-pizza.jpg", notes: "Classic Italian comfort food with a warm, family vibe." },
  { id: 9, name: "West Greek St Ives", cuisine: ["Greek","Mediterranean"], neighbourhood: "Porthmeor Beach", price: "£££", address: "Porthmeor Beach, St Ives", website: "https://westgreek.co.uk/", image: "https://i.ibb.co/Q7GMHV8q/IMG-1805.jpg", notes: "Modern Greek dining by the sea with mezze and cocktails." },
  { id: 10, name: "The Cornish Deli", cuisine: ["Deli","Cafe"], neighbourhood: "Chapel Street", price: "££", address: "3 Chapel St, St Ives", website: "https://www.cornishdeli.com/", image: "https://i.ibb.co/G3bLj9Nf/IMG-1787.jpg", notes: "Independent deli cafe serving local produce." },
  { id: 11, name: "Onzo Pizzeria", cuisine: ["Italian","Pizza"], neighbourhood: "Fore Street", price: "££", address: "Fore St, St Ives", website: "https://www.onzopizza.co.uk/", image: "https://i.ibb.co/JFQsBXGq/IMG-1788.jpg", notes: "Artisanal pizza spot with a modern coastal feel." },
  { id: 12, name: "Source Kitchen", cuisine: ["Modern European"], neighbourhood: "The Wharf", price: "£££", address: "The Wharf, St Ives", website: "https://sourcekitchen.co.uk/", image: "https://i.ibb.co/205MbjpD/IMG-1802.jpg", notes: "Seasonal small plates, natural wines." },
  { id: 13, name: "Hub St Ives", cuisine: ["Burgers","Grill"], neighbourhood: "The Wharf", price: "££", address: "Wharf Rd, St Ives", website: "https://hub-stives.co.uk/", image: "https://i.ibb.co/QvbHCptk/IMG-1786.jpg", notes: "Harbourfront burger and grill with local beers." },
  { id: 14, name: "Rum & Crab", cuisine: ["Seafood","Caribbean"], neighbourhood: "The Wharf", price: "£££", address: "Wharf Rd, St Ives", website: "https://www.rumandcrab.co.uk/", image: "https://i.ibb.co/sJ6vSV4w/IMG-1784.jpg", notes: "Seafood classics with a rum bar twist and a lively coastal atmosphere." },
  { id: 15, name: "Una Kitchen", cuisine: ["Mediterranean","Wood-fired"], neighbourhood: "Carbis Bay", price: "£££", address: "Una St Ives, Laity Lane, TR27 6EG", website: "https://www.unastives.co.uk/restaurant", image: "https://i.ibb.co/Z6n32bmg/IMG-1804.jpg", notes: "Mediterranean dishes from a wood-fired oven." },
];

const DETAILS = {
  "porthminster beach cafe": { description: "Perched directly on the golden sands of Porthminster Beach with sweeping views across St Ives Bay, this multi-award-winning destination offers a relaxed, coastal-elegant dining experience. The menu blends the freshest Cornish seafood, herbs and vegetables grown in its adjacent garden, and subtle Asian–Mediterranean influences.", signatures: ["Lobster tagliatelle","Trout pastrami with horseradish","Sustainably caught local shellfish (seasonal)"], phone: "01736 795352", website: "https://www.porthminstercafe.co.uk/", email: "reservations@porthminstercafe.co.uk", hours: "Brunch 10:00–11:30 · Main menu 12:00–20:00 (seasonal variations possible)", dietary: "Vegetarian & gluten-free options", atmosphere: "Beach-house chic with sea views", goodFor: "Romantic dinners, seaside lunches, celebrations" },
  "porthmeor beach cafe": { description: "Nestled just beneath Tate St Ives, this buzzing beachfront café-bar serves breakfast through to dinner with imaginative cocktails and a lively terrace setting overlooking the surf. Famous for sunsets and a relaxed, social vibe.", signatures: ["Build-your-own breakfasts & fresh juices","Vegetarian & seafood-tapas menu","Sunset cocktails on the terrace"], phone: "01736 793366", website: "https://www.porthmeor-beach.co.uk/", hours: "Breakfast from ~09:00 · Lunch from 12:00 · Evenings to ~22:00", price: "££", dietary: "Veggie, vegan & GF options", atmosphere: "Lively beachfront terrace", goodFor: "Brunch, family lunch, sunset drinks" },
  "ardor": { description: "Chef-patron Dorian Janmaat’s modern Mediterranean brasserie brings vibrant Iberian flavours together with Cornish seafood and dry-aged meats. An elevated yet accessible dining room with a charcoal-grill focus.", signatures: ["Charcoal-grilled sirloin on the bone","Monkfish & prawn skewer, Canarian sauce","Spanish classics (crème catalana, churros)"], phone: "01736 794004", website: "https://www.ardorstives.co.uk/", hours: "Lunch 12:00–14:30 · Dinner 17:00–21:00", dietary: "Veggie, vegan & GF options", atmosphere: "Elegant, warm, open kitchen", goodFor: "Celebrations, foodie date nights" },
  "the mermaid seafood": { description: "A beloved family-run institution in the historic Down-a-Long quarter. Cosy, wood-panelled dining room serving the freshest Cornish-caught seafood with timeless charm.", signatures: ["The Mermaid Fish Platter","Pot of Seafood (garlic & white wine)","Simply grilled lemon sole / seabass"], phone: "01736 796816", website: "https://mermaidstives.co.uk/", hours: "Dinner Mon–Sat from 18:00 · Sun closed (seasonal variations)", dietary: "Veggie & GF options", atmosphere: "Cosy, historic, intimate", goodFor: "Romantic seafood suppers" },
  "blas burgerworks": { description: "A local favourite for inventive burgers made with Cornish produce. Compact, lively space with reclaimed materials and a quality-first ethos for meat-eaters and plant-based diners alike.", signatures: ["100% Cornish beef burgers","Well-rated vegetarian & vegan burgers","Hand-cut chips, GF options"], phone: "01736 797272", website: "https://www.blasburgerworks.co.uk/", hours: "Evenings from ~17:00 (seasonal)", dietary: "Strong veggie/vegan & GF options", atmosphere: "Casual, lively", goodFor: "Groups, burger fans" },
  "talay thai kitchen": { description: "Right on the harbour front, TALAY blends authentic Thai flavours with relaxed Cornish beach vibes. Lively upstairs dining with sea views and a cocktail-friendly lounge/bar.", signatures: ["Massaman & seafood jungle curries","Sticky pork meatballs, Thai beef salad","Thai-twist cocktails"], phone: "01736 795157", website: "https://www.talay.co.uk/", hours: "Daily 12:00–~22:00 · Walk-ins", dietary: "Veggie, vegan & GF options", atmosphere: "Chic, lively, harbour-front", goodFor: "Lunch, date nights, groups" },
  "peppers pasta": { description: "Friendly, family-oriented Italian in the centre of St Ives. Handmade pasta, stone-baked pizzas, and seasonal Cornish ingredients keep things fresh and comforting.", signatures: ["Fresh pasta specials","Stone-baked pizzas","Local seafood pasta options"], phone: "01736 794014", website: "https://www.peppers-stives.co.uk/", hours: "Family-friendly lunch & dinner (seasonal)", dietary: "Can adapt for allergies", atmosphere: "Cozy, casual", goodFor: "Families, relaxed Italian" },
  "west greek st ives": { description: "By Porthmeor Beach, West Greek delivers authentic Greek street-food energy — gyros, souvlaki, generous platters and plenty of veggie/vegan options, just steps from the sand.", signatures: ["Gyros & souvlaki wraps","Greek platters","Traditional cakes & sides"], phone: "01736 695607", website: "https://westgreek.co.uk/", hours: "Seasonal · Daily till sunset · Walk-ins only", dietary: "Veggie & vegan options", atmosphere: "Surf-side casual", goodFor: "Beach days, sunset bites" },
  "the cornish deli": { description: "Part deli, part café, part evening spot (seasonally). A celebration of Cornish produce with brunch, lunch, and deli-to-go options perfect for beach picnics.", signatures: ["Artisan breads, cheeses & seafood salads","Deli sandwiches, soups & salad boxes","Evening meals in summer"], phone: "01736 795100", website: "https://www.cornishdeli.com/", hours: "Daily café/deli hours · Evenings Tue–Sun in summer", dietary: "Veggie, vegan & GF-friendly", atmosphere: "Easy-going, local", goodFor: "Brunch, picnics, casual eats" },
  "onzo pizzeria": { description: "Set in the old lifeboat station on the harbour, Onzo focuses on wood-fired, sourdough-based pizzas with a modern Italian vibe and sea views.", signatures: ["Wood-fired sourdough pizzas","Italian small plates","Takeaway available"], phone: "01736 780087", website: "https://www.onzopizza.co.uk/", hours: "Lunch & dinner service (seasonal)", dietary: "GF base available", atmosphere: "Vibrant, modern", goodFor: "Families, pizza lovers" },
  "source kitchen": { description: "Down the cobbles of The Digey, Source Kitchen crafts seasonal plates from local fish, shellfish and artisan produce with European/Middle-Eastern sparks.", signatures: ["Day-boat fish with creative sauces","Sharing plates (beef, shellfish, vegetables)"], phone: "01736 799487", website: "https://www.sourcekitchen.co.uk/", hours: "Lunch 12:15–15:30 · Dinner sittings · Closed Monday", dietary: "Veggie & vegan options", atmosphere: "Intimate, stylish", goodFor: "Couples, seasonal dining" },
  "hub st ives": { description: "Relaxed all-day café-bar on the harbour: craft drinks, award-winning burgers (including plant-based), and a strong breakfast/brunch game with sea views.", signatures: ["House & plant-based burgers","Breakfast/brunch staples","Craft beers & cocktails"], phone: "01736 799099", website: "https://hub-stives.co.uk/", hours: "Sun–Thu 08:30–21:30 · Fri–Sat to 23:00 (kitchen slightly earlier)", dietary: "Veggie & vegan options", atmosphere: "Lively, dog-friendly", goodFor: "Brunch, casual dinners, groups" },
  "rum & crab": { description: "Harbourside tavern spirit meets Cornish seafood: dressed crab, shellfish buckets and rum-forward cocktails served in a nautical-chic space on Wharf Road.", signatures: ["Whole dressed crab & shellfish platters","Seafood chowder","Curried crab cakes"], phone: "01736 799758", website: "https://www.rumandcrab.co.uk/", hours: "Daily 12:00–22:00 (kitchen to ~21:30)", dietary: "Veggie & GF options", atmosphere: "Rustic-modern, upbeat", goodFor: "Families, seafood with drinks" },
  "una kitchen": { description: "Mediterranean-inspired dining around a grand wood-fired oven at the Una resort above St Ives. Stylish yet laid-back, with countryside-overlooking tranquility.", signatures: ["Wood-fired pizzas","Seasonal Mediterranean mains","Sunday roasts"], website: "https://www.unastives.co.uk/restaurant", hours: "Varies seasonally · Booking recommended", dietary: "Flexible, seasonal", atmosphere: "Elegant, relaxed", goodFor: "Date nights, special occasions" },
};

const featuredName = "Porthminster Beach Cafe";

// --- Helpers ---
const $ = (id)=> document.getElementById(id);
const safeUrl = (u)=>{ if(!u) return null; const t=String(u).trim(); if(!t) return null; return /^https?:\/\//i.test(t) ? t : `https://${t}`; };
const dirUrlFrom = (addr)=> `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addr||"St Ives")}`;
const uniq = (arr)=> [...new Set(arr)];
const by = (k, dir=1)=> (a,b)=> (String(a[k]||"").localeCompare(String(b[k]||"")))*dir;
const priceRank = (p)=> ({"£":1,"££":2,"£££":3}[p]||99);

// --- Renderers ---
function card(r){
  const div = document.createElement('div');
  div.className='card fade';
  div.innerHTML = `
    <div class="card-header">
      <h3 class="card-title" id="card-${r.id}-title">${r.name}</h3>
      <div class="muted">${r.neighbourhood||""}</div>
    </div>
    <div class="card-body">
      <img class="img" src="${r.image}" alt="${r.name}" loading="lazy" width="480" height="200">
      <p class="muted" style="font-size:13px">${r.notes||""}</p>
      <div class="btnrow">
        <button class="btn primary" type="button" aria-haspopup="dialog" aria-controls="overlay" aria-label="View details for ${r.name}">Details</button>
        ${r.website ? `<a class="btn ghost" href="${safeUrl(r.website)}" target="_blank" rel="noreferrer noopener" aria-label="Visit website for ${r.name}">Website</a>`:``}
        <a class="btn ghost" href="${dirUrlFrom(r.address)}" target="_blank" rel="noreferrer noopener" aria-label="Get directions to ${r.name}">Directions</a>
      </div>
    </div>`;
  div.querySelector('.btn.primary').addEventListener('click',()=> openDetails(r.id, div.querySelector('.btn.primary')));
  return div;
}

function featuredCard(r){
  const div = document.createElement('div');
  div.className='card fade';
  div.innerHTML = `
    <div class="card-header">
      <div class="card-title"><span class="featured-badge">Featured</span>${r.name}</div>
      <div class="muted">${r.neighbourhood||""}</div>
    </div>
    <div class="card-body">
      <img class="img" style="height:224px" src="${r.image}" alt="${r.name}" loading="lazy" width="480" height="224">
      <p class="muted" style="font-size:13px">${r.notes||""}</p>
      <div class="btnrow">
        <button class="btn primary" type="button">Details</button>
        <a class="btn ghost" href="${dirUrlFrom(r.address)}" target="_blank" rel="noreferrer noopener">Directions</a>
      </div>
    </div>`;
  div.querySelector('.btn.primary').addEventListener('click',()=> openDetails(r.id, div.querySelector('.btn.primary')));
  return div;
}

// --- DOM refs ---
const elQ = $('q');
const elGrid = $('grid');
const elFeatured = $('featured');
const elOverlay = $('overlay');
const elBack = $('back');
const elSort = $('sort');
const elCuisine = $('cuisine-pills');

function render(list){
  elGrid.innerHTML='';
  list.forEach(r=> elGrid.appendChild(card(r)));
}
function renderFeatured(item){
  elFeatured.innerHTML='';
  if(!item) return; elFeatured.appendChild(featuredCard(item));
}

// --- Cuisine filter pills ---
const ALL_CUISINES = uniq(DATA.flatMap(d=> d.cuisine||[]));
let activeCuisines = new Set();
function drawCuisinePills(){
  elCuisine.innerHTML='';
  const mk = (label)=>{
    const b = document.createElement('button');
    b.className='pill';
    b.type='button';
    b.setAttribute('aria-pressed', 'false');
    b.textContent = label;
    b.addEventListener('click', ()=>{
      if(label==='All'){ activeCuisines.clear(); [...elCuisine.querySelectorAll('.pill')].forEach((x,i)=> x.setAttribute('aria-pressed', i===0?'true':'false')); update(); return; }
      if(activeCuisines.has(label)) activeCuisines.delete(label); else activeCuisines.add(label);
      b.setAttribute('aria-pressed', activeCuisines.has(label)?'true':'false');
      if(activeCuisines.size>0){ elCuisine.firstChild.setAttribute('aria-pressed','false'); }
      update();
    });
    return b;
  };
  elCuisine.appendChild(mk('All'));
  elCuisine.firstChild.setAttribute('aria-pressed','true');
  ALL_CUISINES.forEach(c=> elCuisine.appendChild(mk(c)));
}

// --- Media split (image + rickroll placeholder) ---
function buildMediaSplit(src){
  const img=document.getElementById('detail-img');
  img.src=src; img.alt='Restaurant photo';
  const yt=document.getElementById('yt-link');
  yt.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  yt.style.backgroundImage="url('https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg')";
}

// --- Overlay (details) with focus management ---
let lastFocus = null;
function openDetails(id, triggerEl){
  const r = DATA.find(x=> x.id===id); if(!r) return;
  lastFocus = triggerEl || document.activeElement;
  const d = DETAILS[String(r.name).toLowerCase()] || {};
  document.getElementById('detail-title').textContent = r.name;
  document.getElementById('detail-subtext').textContent = (r.neighbourhood||'') + (r.price?` • ${r.price}`:'');
  buildMediaSplit(r.image);
  document.getElementById('detail-desc').textContent = d.description || r.notes || '';

  const sigWrap = document.getElementById('detail-signatures');
  const sigUl = document.getElementById('sig-ul'); sigUl.innerHTML='';
  if(Array.isArray(d.signatures) && d.signatures.length){
    sigWrap.style.display='block';
    d.signatures.forEach(s=>{ const li=document.createElement('li'); li.textContent=s; sigUl.appendChild(li); });
  } else { sigWrap.style.display='none'; }

  const info = document.getElementById('detail-info'); info.innerHTML='';
  const infoPairs = [ ['Opening hours', d.hours], ['Dietary', d.dietary], ['Atmosphere', d.atmosphere], ['Good for', d.goodFor] ].filter(p=> p[1]);
  if(infoPairs.length){
    info.style.display='grid';
    info.style.gridTemplateColumns='repeat(auto-fit, minmax(260px, 1fr))';
    info.style.gap='16px';
    infoPairs.forEach(([label,val])=>{
      const box = document.createElement('div');
      box.className='section';
      box.innerHTML = `<div style="font-size:12px;opacity:.7;text-transform:uppercase;margin-bottom:6px">${label}</div><div style="font-size:14px">${val}</div>`;
      info.appendChild(box);
    });
  } else { info.style.display='none'; }

  const w = d.website || r.website; const a = d.address || r.address || r.neighbourhood;
  const wEl = document.getElementById('detail-website'); if(w){ wEl.style.display='inline-block'; wEl.href = safeUrl(w); } else { wEl.style.display='none'; }
  document.getElementById('detail-directions').href = dirUrlFrom(a);
  document.getElementById('detail-address').textContent = a ? `Address: ${a}` : '';

  elOverlay.classList.add('show');
  // Trap focus inside dialog
  const focusable = elOverlay.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0]; const last = focusable[focusable.length-1];
  first && first.focus();
  function handleTab(e){
    if(e.key !== 'Tab') return; if(focusable.length===0) return;
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
  function handleEsc(e){ if(e.key==='Escape'){ closeDetails(); } }
  elOverlay.addEventListener('keydown', handleTab);
  window.addEventListener('keydown', handleEsc, { once:true });
  elOverlay.addEventListener('click', (e)=>{ if(e.target===elOverlay) closeDetails(); }, { once:true });
}
function closeDetails(){
  elOverlay.classList.remove('show');
  if(lastFocus && typeof lastFocus.focus==='function'){ lastFocus.focus(); }
}
document.getElementById('back').addEventListener('click', closeDetails);

// --- Sorting + Filtering + Search ---
const featured = DATA.find(r=> r.name === featuredName);
const rest = DATA.filter(r=> r!==featured);

function applyFilters(list){
  const q = elQ.value.toLowerCase().trim();
  let res = list.filter(d=>{
    const blob = (d.name + ' ' + (d.neighbourhood||'') + ' ' + (d.address||'') + ' ' + (d.notes||'') + ' ' + (d.cuisine||[]).join(' ')).toLowerCase();
    const matchText = !q || blob.includes(q);
    const matchCuisine = activeCuisines.size===0 || (d.cuisine||[]).some(c=> activeCuisines.has(c));
    return matchText && matchCuisine;
  });
  const sort = elSort.value;
  if(sort==='name') res.sort(by('name', 1));
  if(sort==='price') res.sort((a,b)=> priceRank(a.price)-priceRank(b.price) || a.name.localeCompare(b.name));
  return res;
}

function update(){
  const q = elQ.value.trim();
  const list = applyFilters(DATA);
  elFeatured.innerHTML='';
  if(!q && activeCuisines.size===0 && elSort.value==='featured' && featured){
    renderFeatured(featured);
    render(rest);
  } else {
    render(list);
  }
  try{
    localStorage.setItem('stives.q', q);
    localStorage.setItem('stives.sort', elSort.value);
    localStorage.setItem('stives.cuisines', JSON.stringify([...activeCuisines]));
  }catch{}
}

elQ.addEventListener('input', update);
elSort.addEventListener('change', update);

drawCuisinePills();

// initial render + hydrate persisted state
try{
  const savedQ = localStorage.getItem('stives.q')||'';
  elQ.value = savedQ;
  const savedSort = localStorage.getItem('stives.sort');
  if(savedSort) elSort.value = savedSort;
  const savedCuisines = JSON.parse(localStorage.getItem('stives.cuisines')||'[]');
  savedCuisines.forEach(c=> activeCuisines.add(c));
  // reflect pressed state
  [...elCuisine.children].forEach(btn=>{
    if(btn.textContent!=="All" && activeCuisines.has(btn.textContent)) btn.setAttribute('aria-pressed','true');
    if(activeCuisines.size>0) elCuisine.firstChild.setAttribute('aria-pressed','false');
  });
}catch{}

update();

// Deep-link handler
if(location.hash.startsWith('#details-')){
  const id = Number(location.hash.replace('#details-',''));
  if (id) openDetails(id);
}

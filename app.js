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
  "porthminster beach cafe": { description: "Perched directly on the golden sands of Porthminster Beach with sweeping views across St Ives Bay, this multi-award-winning destination offers a relaxed, coastal-elegant dining experience. The menu blends the freshest Cornish seafood, herbs and vegetables grown in its adjacent garden, and subtle Asian–Mediterranean influences.", signatures: ["Lobster tagliatelle","Trout pastrami with horseradish","Sustainably caught local shellfish (seasonal)"], phone: "01736 795352", website: "https://www.porthminstercafe.co.uk/", hours: "Brunch 10:00–11:30 · Main menu 12:00–20:00", dietary: "Vegetarian & gluten-free options", atmosphere: "Beach-house chic with sea views", goodFor: "Romantic dinners, seaside lunches, celebrations" },
  "porthmeor beach cafe": { description: "Nestled just beneath Tate St Ives, this buzzing beachfront café-bar serves breakfast through to dinner with imaginative cocktails and a lively terrace setting overlooking the surf. Famous for sunsets and a relaxed, social vibe.", signatures: ["Build-your-own breakfasts","Seafood tapas","Sunset cocktails"], hours: "Breakfast from 9:00 · Evenings to 22:00", dietary: "Veggie, vegan & GF options", atmosphere: "Lively beachfront terrace", goodFor: "Brunch, family lunch, sunset drinks" },
  "ardor": { description: "Chef-patron Dorian Janmaat’s modern Mediterranean brasserie brings vibrant Iberian flavours together with Cornish seafood and dry-aged meats.", signatures: ["Charcoal-grilled sirloin","Monkfish & prawn skewer"], hours: "Lunch 12:00–14:30 · Dinner 17:00–21:00", dietary: "Veggie, vegan & GF options", atmosphere: "Elegant, warm, open kitchen", goodFor: "Celebrations, foodie date nights" }
  // ... keep all the other restaurant DETAIL entries ...
};

const featuredName = "Porthminster Beach Cafe";

// --- Helpers ---
const $ = (id)=> document.getElementById(id);
const safeUrl = (u)=>{ if(!u) return null; const t=String(u).trim(); if(!t) return null; return /^https?:\/\//i.test(t) ? t : `https://${t}`; };
const dirUrlFrom = (addr)=> `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addr||"St Ives")}`;
const uniq = (arr)=> [...new Set(arr)];
const by = (k, dir=1)=> (a,b)=> (String(a[k]||"").localeCompare(String(b[k]||"")))*dir;
const priceRank = (p)=> ({"£":1,"££":2,"£££":3}[p]||99);

// --- DOM references ---
const elQ = $('q');
const elGrid = $('grid');
const elFeatured = $('featured');
const elOverlay = $('overlay');
const elBack = $('back');
const elSort = $('sort');
const elCuisine = $('cuisine-pills');

// --- Rendering ---
function card(r){
  const div = document.createElement('div');
  div.className='card fade';
  div.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">${r.name}</h3>
      <div class="muted">${r.neighbourhood||""}</div>
    </div>
    <div class="card-body">
      <img class="img" src="${r.image}" alt="${r.name}" loading="lazy">
      <p class="muted">${r.notes||""}</p>
      <div class="btnrow">
        <button class="btn primary" type="button">Details</button>
        ${r.website ? `<a class="btn ghost" href="${safeUrl(r.website)}" target="_blank" rel="noreferrer noopener">Website</a>` : ""}
        <a class="btn ghost" href="${dirUrlFrom(r.address)}" target="_blank" rel="noreferrer noopener">Directions</a>
      </div>
    </div>`;
  div.querySelector('.btn.primary').addEventListener('click',()=> openDetails(r.id, div.querySelector('.btn.primary')));
  return div;
}

function render(list){
  elGrid.innerHTML='';
  list.forEach(r=> elGrid.appendChild(card(r)));
}

// --- Filters ---
const ALL_CUISINES = uniq(DATA.flatMap(d=> d.cuisine||[]));
let activeCuisines = new Set();
function drawCuisinePills(){
  elCuisine.innerHTML='';
  const mk = (label)=>{
    const b = document.createElement('button');
    b.className='pill';
    b.textContent=label;
    b.setAttribute('aria-pressed','false');
    b.addEventListener('click',()=>{
      if(label==='All'){activeCuisines.clear();update();return;}
      if(activeCuisines.has(label))activeCuisines.delete(label);else activeCuisines.add(label);
      update();
    });
    return b;
  };
  elCuisine.appendChild(mk('All'));
  ALL_CUISINES.forEach(c=> elCuisine.appendChild(mk(c)));
}

// --- Details Overlay ---
let lastFocus=null;
function openDetails(id, triggerEl){
  const r=DATA.find(x=>x.id===id); if(!r)return;
  lastFocus=triggerEl;
  const d=DETAILS[String(r.name).toLowerCase()]||{};
  document.getElementById('detail-title').textContent=r.name;
  document.getElementById('detail-desc').textContent=d.description||r.notes||'';
  document.getElementById('detail-img').src=r.image;
  document.getElementById('detail-address').textContent=r.address||'';
  document.getElementById('detail-directions').href=dirUrlFrom(r.address);
  document.getElementById('detail-website').href=safeUrl(d.website||r.website);
  document.getElementById('overlay').classList.add('show');
}
function closeDetails(){
  document.getElementById('overlay').classList.remove('show');
  if(lastFocus)lastFocus.focus();
}
document.getElementById('back').addEventListener('click',closeDetails);

// --- Update list ---
function update(){
  const q=elQ.value.toLowerCase().trim();
  const sort=elSort.value;
  let res=DATA.filter(d=>{
    const blob=(d.name+' '+d.cuisine.join(' ')).toLowerCase();
    return blob.includes(q)||(activeCuisines.size===0||(d.cuisine||[]).some(c=>activeCuisines.has(c)));
  });
  if(sort==='name')res.sort(by('name',1));
  render(res);
}

elQ.addEventListener('input',update);
elSort.addEventListener('change',update);

drawCuisinePills();
update();

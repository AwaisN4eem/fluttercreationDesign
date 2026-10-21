/* Flutter Creations — shared storefront, no build step required. */
(() => {
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>'Rs. '+Number(n).toLocaleString('en-PK');
const params=new URLSearchParams(location.search), main=$('#store-main');
const groups={
 occasion:{label:'By occasion',intro:'For every reason to celebrate.',items:['Wedding','Baby','Birthday','Islamic','Corporate'],subs:{Wedding:['Nikkah','Mehndi','Walima & Barat','Engagement'],Baby:['Baby Girl','Baby Boy','Baby Shower'],Birthday:['Party Favours','Goody Bags','Name Cutouts'],Islamic:['Hajj & Umrah','Ameen'],Corporate:['Graduation','Corporate Gifting']}},
 purpose:{label:'By purpose',intro:'Thoughtful details, whatever you are planning.',items:['Favour Boxes','Gift Packaging','Bags & Pouches','Party Decor','Announcement Boxes'],subs:{}},
 material:{label:'By material',intro:'Find the finish that feels just right.',items:['Acrylic','Velvet','Jute','Tin','Cardboard','Fabric'],subs:{}},
 need:{label:'By need',intro:'A little help finding your perfect creation.',items:['Personalised Gifts','Bulk Orders','Under Rs. 400','Empty Packaging'],subs:{}}
};
const products=window.FC_PRODUCTS.map((p,i)=>{const n=p.name.toLowerCase();let material=/acrylic/.test(n)?'Acrylic':/velvet/.test(n)?'Velvet':/jute/.test(n)?'Jute':/tin box/.test(n)?'Tin':/gota|dress|pouch/.test(n)?'Fabric':'Cardboard';let purpose=/cutout/.test(n)?'Party Decor':/bags|pouches|dress/.test(n)?'Bags & Pouches':p.category==='Baby'?'Announcement Boxes':p.category==='Corporate'?'Gift Packaging':'Favour Boxes';let occasion=[p.category];if(p.category==='Wedding')occasion.push('Nikkah','Mehndi','Walima & Barat','Engagement');if(p.category==='Baby')occasion.push(/girl/.test(n)?'Baby Girl':'Baby Boy','Baby Shower');if(p.category==='Birthday')occasion.push(purpose==='Party Decor'?'Name Cutouts':/bags/.test(n)?'Goody Bags':'Party Favours');if(p.category==='Islamic')occasion.push(/ameen/.test(n)?'Ameen':'Hajj & Umrah');if(p.category==='Corporate')occasion.push(/graduation/.test(n)?'Graduation':'Corporate Gifting');return {...p,material,purpose,occasion,need:['Bulk Orders',...(!/plain/.test(n)?['Personalised Gifts']:['Empty Packaging']),...(p.price>0&&p.price<400?['Under Rs. 400']:[])],index:i};});
window.FC_CATALOG=products;
const curatedCollections={'best-sellers':{title:'Best Sellers',ids:['wedding-2','baby-2','islamic-2','birthday-1','wedding-4','baby-3']},'new-arrivals':{title:'New Arrivals',ids:['baby-6','birthday-2','islamic-6','corporate-6','wedding-6','baby-4']}};
const url=(key,value)=>'shop.html?'+new URLSearchParams({[key]:value});
const match=(p,key,value)=>key==='occasion'?p.occasion.includes(value):key==='need'?p.need.includes(value):p[key]===value;
let bag=[];try{bag=JSON.parse(localStorage.getItem('fc-bag')||'[]').filter(x=>products.some(p=>p.id===x.id)&&Number.isInteger(x.qty)&&x.qty>0);}catch{}
const save=()=>{try{localStorage.setItem('fc-bag',JSON.stringify(bag));}catch{}updateCount();};
function updateCount(){const n=bag.reduce((a,b)=>a+b.qty,0);$$('[data-count],.badgeN,.nb').forEach(e=>e.textContent=n);$$('.mbar a').filter(e=>/Cart|Bag/.test(e.textContent)).forEach(e=>e.innerHTML='<svg class="ic"><use href="#i-cart"/></svg>Bag ('+n+')');}
function toast(t){$('.fc-toast')?.remove();const e=document.createElement('div');e.className='fc-toast';e.setAttribute('role','status');e.textContent=t;document.body.append(e);setTimeout(()=>e.remove(),3000);}
function tile(p){return `<article class="product-tile"><a class="tile-picture" href="product.html?id=${p.id}"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"><span class="category-tag">${esc(p.category)}</span></a><h2><a href="product.html?id=${p.id}">${esc(p.name)}</a></h2><div class="tile-price">${p.price?'<small>from </small>'+money(p.price):'Request a quote'}</div><a class="tile-link" href="product.html?id=${p.id}">View & personalise <span>↗</span></a></article>`;}
function nav() {
  const design = window.FC_MENU_DESIGN;
  const decor = design.decorations;
  if (!$('#c-Wedding')) {
    const sprites = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    sprites.style.display = 'none';
    sprites.setAttribute('aria-hidden', 'true');
    sprites.innerHTML = design.symbols;
    document.body.prepend(sprites);
  }
  const icon = name => '<svg class="menu-icon" aria-hidden="true"><use href="#c-' + name + '"/></svg>';
  const unique = (svg, id) => svg.replace(/id="pt-/g, 'id="cards-' + id + '-').replace(/url\(#pt-/g, 'url(#cards-' + id + '-');
  const makeCard = (label, filters, imageId) => {
    const candidates = products.filter(product => Object.entries(filters).every(([key, value]) =>
      key === 'q' ? product.name.toLowerCase().includes(value.toLowerCase()) : match(product, key, value)));
    const photo = products.find(product => product.id === imageId) || candidates[0] || products[0];
    return { label, href: 'shop.html?' + new URLSearchParams(filters), image: 'assets/menu/' + photo.id + '.webp' };
  };
  const forCategory = (category, label, filters = {}, imageId) => makeCard(label, { occasion: category, ...filters }, imageId);
  const types = {
    Wedding: [
      forCategory('Wedding', 'Favour Boxes', { purpose: 'Favour Boxes' }, 'wedding-1'),
      forCategory('Wedding', 'Bags & Pouches', { purpose: 'Bags & Pouches' }, 'wedding-3'),
      forCategory('Wedding', 'Velvet Boxes', { material: 'Velvet' }, 'wedding-2'),
      forCategory('Wedding', 'Acrylic Boxes', { material: 'Acrylic' }, 'wedding-4'),
      forCategory('Wedding', 'Jute Bags', { material: 'Jute' }, 'wedding-5')
    ],
    Baby: [
      forCategory('Baby', 'Tin Boxes', { material: 'Tin' }, 'baby-1'),
      forCategory('Baby', 'Acrylic Boxes', { material: 'Acrylic' }, 'baby-2'),
      forCategory('Baby', 'Crochet Boxes', { q: 'Crochet' }, 'baby-4'),
      forCategory('Baby', '3D Boxes', { q: '3D' }, 'baby-3'),
      forCategory('Baby', 'Keepsake Boxes', { q: 'Wooden' }, 'baby-6')
    ],
    Birthday: [
      forCategory('Birthday', 'Goody Boxes', { occasion: 'Party Favours' }, 'birthday-1'),
      forCategory('Birthday', 'Goody Bags', { occasion: 'Goody Bags' }, 'birthday-4'),
      forCategory('Birthday', 'Name Cutouts', { occasion: 'Name Cutouts' }, 'birthday-3'),
      forCategory('Birthday', 'Pastel Party Bags', { q: 'Pastel' }, 'birthday-5')
    ],
    Islamic: [
      forCategory('Islamic', 'Tabarruk Boxes', { occasion: 'Hajj & Umrah' }, 'islamic-1'),
      forCategory('Islamic', 'Ribbon & Tag Boxes', { q: 'Ribbon' }, 'islamic-2'),
      forCategory('Islamic', 'Acrylic Boxes', { material: 'Acrylic' }, 'islamic-5'),
      forCategory('Islamic', 'Ameen Boxes', { occasion: 'Ameen' }, 'islamic-6')
    ],
    Corporate: [
      forCategory('Corporate', 'Gift Packaging', { purpose: 'Gift Packaging' }, 'corporate-1'),
      forCategory('Corporate', 'Acrylic Boxes & Trays', { material: 'Acrylic' }, 'corporate-4'),
      forCategory('Corporate', 'Plain Boxes', { q: 'Plain' }, 'corporate-3'),
      forCategory('Corporate', 'Gift Mugs', { q: 'Mug' }, 'corporate-5'),
      forCategory('Corporate', 'Graduation Boxes', { q: 'Graduation' }, 'corporate-6')
    ]
  };
  const occasions = {
    Wedding: groups.occasion.subs.Wedding.map((event, i) => makeCard(event, { occasion: event }, ['wedding-2', 'wedding-1', 'wedding-4', 'wedding-6'][i])),
    Baby: groups.occasion.subs.Baby.map((event, i) => makeCard(event, { occasion: event }, ['baby-2', 'baby-3', 'baby-1'][i])),
    Birthday: [
      forCategory('Birthday', 'Birthday Parties', {}, 'birthday-2'),
      forCategory('Birthday', 'Teddy Bear Parties', { q: 'Teddy' }, 'birthday-1'),
      forCategory('Birthday', 'Aeroplane Parties', { q: 'Aeroplane' }, 'birthday-2'),
      forCategory('Birthday', 'Pastel Celebrations', { q: 'Pastel' }, 'birthday-5')
    ],
    Islamic: groups.occasion.subs.Islamic.map((event, i) => makeCard(event, { occasion: event }, ['islamic-2', 'islamic-6'][i])),
    Corporate: [
      makeCard('Graduation', { occasion: 'Graduation' }, 'corporate-1'),
      makeCard('Corporate Gifting', { occasion: 'Corporate Gifting' }, 'corporate-4'),
      forCategory('Corporate', "Father’s Day", { q: 'Fathers' }, 'corporate-5')
    ]
  };
  const globalImageIds = { 'Favour Boxes': 'wedding-1', 'Gift Packaging': 'corporate-1', 'Bags & Pouches': 'wedding-3', 'Party Decor': 'birthday-3', 'Announcement Boxes': 'baby-1', 'Personalised Gifts': 'wedding-4', 'Bulk Orders': 'corporate-1', 'Under Rs. 400': 'wedding-1', 'Empty Packaging': 'corporate-3' };
  const globalCards = key => groups[key].items.map(value => makeCard(value, { [key]: value }, globalImageIds[value]));
  const categoryCards = (category, key) => groups[key].items
    .filter(value => products.some(product => product.category === category && match(product, key, value)))
    .map((value, index) => { const candidates = products.filter(product => product.category === category && match(product, key, value)); return forCategory(category, value, { [key]: value }, candidates[(index + 1) % candidates.length].id); });
  const modes = [{ key: 'type', label: 'By Type' }, { key: 'occasion', label: 'By Occasion' }, { key: 'material', label: 'By Material' }];
  const cardsMarkup = cards => cards.map(card => '<a class="mega-image-card" href="' + esc(card.href) + '"><img src="' + esc(card.image) + '" alt="" loading="lazy"><span class="mega-card-caption"><strong>' + esc(card.label) + '</strong><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a>').join('');
  const menuCards = {};
  groups.occasion.items.forEach(category => {
    menuCards[category] = { type: types[category], occasion: occasions[category], material: categoryCards(category, 'material'), need: categoryCards(category, 'need') };
  });
  const introductions = {
    Wedding: ['Made for your', 'forever moments.'], Baby: ['Little arrivals.', 'Lovely details.'],
    Birthday: ['A little magic', 'for their big day.'], Islamic: ['Meaningful gifts,', 'beautifully shared.'], Corporate: ['Thoughtful gifts.', 'Lasting impressions.']
  };
  function panel(category) {
    const decoration = decor[category];
    return '<div class="browse-panel themed-panel card-mega-panel" id="menu-' + category + '" hidden style="--menu-bg:' + decoration.bg + ';--menu-accent:' + decoration.accent + '">' +
      '<div class="menu-top-deco" aria-hidden="true">' + unique(decoration.top, category) + '</div>' +
      '<div class="card-mega-shell"><aside class="card-mega-intro"><span class="kicker">THE ' + category.toUpperCase() + ' COLLECTION</span><h2>' + introductions[category].join('<br>') + '</h2><a href="' + url('occasion', category) + '">Explore all ' + category.toLowerCase() + ' <span aria-hidden="true">↗</span></a></aside>' +
      '<div class="card-mega-shop"><div class="mega-browse-tabs" role="tablist" aria-label="Browse ' + category.toLowerCase() + '">' + modes.map((mode, i) => '<button id="tab-' + category + '-' + mode.key + '" role="tab" type="button" data-mega-mode="' + mode.key + '" aria-controls="cards-' + category + '-' + mode.key + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? '0' : '-1') + '">' + mode.label + '</button>').join('') + '</div>' +
      modes.map((mode, i) => '<div class="mega-card-grid" id="cards-' + category + '-' + mode.key + '" role="tabpanel" aria-labelledby="tab-' + category + '-' + mode.key + '"' + (i ? ' hidden' : '') + ' style="--card-count:' + Math.min(5, menuCards[category][mode.key].length) + '">' + cardsMarkup(menuCards[category][mode.key]) + '</div>').join('') + '</div></div></div>';
  }
  const host = $('#dnav') || $('.store-nav');
  if (host) {
    host.className = 'browse-nav themed-nav card-nav';
    host.innerHTML = '<div class="browse-inner themed-primary">' + groups.occasion.items.map(category => '<div class="browse-group occasion-group"><button type="button" aria-expanded="false" aria-controls="menu-' + category + '">' + icon(category) + '<span>' + category + '</span></button>' + panel(category) + '</div>').join('') + '<a class="custom-nav" href="info.html?page=custom">' + icon('Custom') + '<span>Custom Order</span></a></div>';
  }
  if (!$('#drawer')) {
    const shell = document.createElement('div'); shell.id = 'drawer'; shell.className = 'drawer';
    shell.innerHTML = '<div class="sh" data-close="drawer"></div><div class="dpanel"><div class="dhead"><span>Shop</span><button class="drawer-close" data-close="drawer" aria-label="Close menu">×</button></div><div id="acc"></div><a class="mobile-custom-link" href="info.html?page=custom">Plan a custom order ↗</a></div>';
    document.body.append(shell);
  }
  const drawer = $('#acc');
  if (drawer) drawer.innerHTML = groups.occasion.items.map(category => {
    const decoration = decor[category];
    return '<details class="mobile-category mobile-themed-category mobile-card-category" style="--menu-bg:' + decoration.bg + ';--menu-accent:' + decoration.accent + '"><summary>' + icon(category) + category + '</summary><div class="mobile-menu-deco" aria-hidden="true">' + unique(decoration.top, 'mobile-' + category) + '</div>' +
      '<section class="mobile-menu-card-section"><h3>By Type</h3><div class="mobile-menu-card-grid">' + cardsMarkup(menuCards[category].type) + '</div></section>' +
      '<details class="mobile-menu-card-section mobile-occasion-submenu"><summary><span class="mobile-dropdown-chevron" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span><span>By Occasion</span></summary><div class="mobile-menu-card-grid">' + cardsMarkup(menuCards[category].occasion) + '</div></details>' +
      '<a class="mobile-all" href="' + url('occasion', category) + '">Explore all ' + category.toLowerCase() + ' →</a></details>';
  }).join('') + ['purpose', 'material'].map(key => '<details class="mobile-category"><summary>' + groups[key].label + '</summary><div class="mobile-menu-card-grid mobile-shopping-cards">' + cardsMarkup(globalCards(key)) + '</div></details>').join('');
  function fitMenuPanel(panel) {
    if (panel.hidden || !matchMedia('(min-width:861px)').matches) return;
    const available = Math.max(0, Math.floor(window.innerHeight - panel.getBoundingClientRect().top - 12));
    const tight = available < 270;
    panel.classList.toggle('mega-tight', tight);
    panel.style.setProperty('--mega-available', available + 'px');
    const reserved = tight ? 90 : 124;
    panel.style.setProperty('--mega-card-height', Math.max(80, Math.min(210, available - reserved)) + 'px');
  }
  let resizeFrame;
  const refit = () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(() => $$('.card-mega-panel:not([hidden])').forEach(fitMenuPanel)); };
  window.addEventListener('resize', refit);
  window.visualViewport?.addEventListener('resize', refit);
  let hoverTimer;
  $$('.browse-group>button').forEach(button => {
    const open = () => {
      if (button.getAttribute('aria-expanded') === 'true') return;
      closeNav(); button.setAttribute('aria-expanded', 'true'); button.nextElementSibling.hidden = false; fitMenuPanel(button.nextElementSibling);
    };
    button.addEventListener('click', () => button.getAttribute('aria-expanded') === 'true' ? closeNav() : open());
    button.parentElement.addEventListener('mouseenter', () => {
      if (matchMedia('(hover:hover)').matches) { clearTimeout(hoverTimer); hoverTimer = setTimeout(open, 110); }
    });
    button.parentElement.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
    button.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') { event.preventDefault(); open(); $('[role="tab"]', button.nextElementSibling)?.focus(); }
    });
  });
  $$('.mega-browse-tabs').forEach(tablist => {
    const tabs = $$('[role="tab"]', tablist);
    function activate(button) {
      tabs.forEach(tab => {
        const active = tab === button;
        tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
      });
    }
    tabs.forEach((button, index) => {
      button.addEventListener('click', () => activate(button));
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); activate(tabs[next]); tabs[next].focus(); }
      });
    });
  });
  host?.addEventListener('mouseleave', () => { if (matchMedia('(hover:hover)').matches) closeNav(); });
}

function setupHeroSlider(){
 const hero=$('#hero');if(!hero)return;const slides=$$('.slide',hero),tabs=$$('.pill,.seg',hero);if(slides.length<2)return;
 let current=0,timer,manuallyPaused=matchMedia('(prefers-reduced-motion:reduce)').matches,hovered=false,focused=false,startX=null,startY=null;const duration=5000;
 const pause=document.createElement('button');pause.className='hero-autoplay';pause.type='button';pause.setAttribute('aria-label',manuallyPaused?'Play slideshow':'Pause slideshow');pause.setAttribute('aria-pressed',String(manuallyPaused));pause.innerHTML=manuallyPaused?'▶':'Ⅱ';hero.append(pause);hero.style.setProperty('--slide-duration',duration+'ms');
 const schedule=()=>{clearTimeout(timer);hero.classList.toggle('autoplay-paused',manuallyPaused||hovered||focused||document.hidden);if(!manuallyPaused&&!hovered&&!focused&&!document.hidden)timer=setTimeout(()=>show(current+1),duration);};
 function show(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>{s.classList.toggle('on',i===current);s.setAttribute('aria-hidden',String(i!==current));if(i!==current)s.setAttribute('inert','');else s.removeAttribute('inert');});tabs.forEach((tab,i)=>{tab.setAttribute('aria-current',String(i===current));tab.classList.toggle('on',i===current);tab.classList.toggle('done',i<current);const bar=$('.bar,b',tab);if(bar){bar.style.animation='none';bar.offsetWidth;bar.style.animation='';}});if(window.SLIDES?.[current])hero.dataset.theme=window.SLIDES[current].cls;hero.dataset.currentSlide=String(current);schedule();}
 tabs.forEach((tab,i)=>tab.addEventListener('click',()=>show(i)));$('#prev')?.addEventListener('click',()=>show(current-1));$('#next')?.addEventListener('click',()=>show(current+1));
 pause.onclick=()=>{manuallyPaused=!manuallyPaused;pause.innerHTML=manuallyPaused?'▶':'Ⅱ';pause.setAttribute('aria-pressed',String(manuallyPaused));pause.setAttribute('aria-label',manuallyPaused?'Play slideshow':'Pause slideshow');schedule();};
 hero.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches){hovered=true;schedule();}});hero.addEventListener('mouseleave',()=>{hovered=false;schedule();});hero.addEventListener('focusin',()=>{focused=true;schedule();});hero.addEventListener('focusout',e=>{if(!hero.contains(e.relatedTarget)){focused=false;schedule();}});
 hero.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;startY=e.touches[0].clientY;clearTimeout(timer);},{passive:true});hero.addEventListener('touchend',e=>{if(startX===null)return;const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;startX=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))show(current+(dx<0?1:-1));else schedule();},{passive:true});
 hero.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(current+(e.key==='ArrowRight'?1:-1));}});document.addEventListener('visibilitychange',schedule);show(0);
}

function promoteMobileShoppingPaths(drawer){
 const acc=$('#acc',drawer);if(!acc)return;
 const chevron='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';
 const icons={purpose:'<path d="M4 8h16v12H4zM3 8h18M12 8v12M12 8C8 2 3 5 6 8h6Zm0 0c4-6 9-3 6 0h-6Z"/>',material:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',need:'<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>'};
 const icon=key=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+icons[key]+'</svg>';
 const text={purpose:{title:'By Type',hint:'Favours, gifts & decor'},material:{title:'By Material',hint:'Acrylic, velvet, tin & more'}};
 const paths=document.createElement('section');paths.className='mobile-shopping-paths';paths.setAttribute('aria-label','Find what you love');paths.innerHTML='<p class="menu-section-label">Find what you love</p>';
 const detailRows=$$('.mobile-category:not(.mobile-themed-category)',acc);
 Object.keys(text).forEach((key,i)=>{const row=detailRows[i];if(!row)return;row.classList.add('mobile-shopping-path');row.dataset.shoppingPath=key;row.id='mobile-path-'+key;const summary=$('summary',row);summary.innerHTML=`<span class="shopping-path-icon">${icon(key)}</span><span class="shopping-path-copy"><strong>${text[key].title}</strong><small>${text[key].hint}</small></span>`;paths.append(row);});
 const header=document.createElement('div');header.className='mobile-menu-start';header.innerHTML='<form class="mobile-menu-search" action="shop.html" role="search"><input name="q" type="search" placeholder="Search products…" aria-label="Search products in menu"><button aria-label="Search products"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></button></form><a class="mobile-shop-all" href="shop.html"><span>Shop All Products</span>'+chevron+'</a>';
 const occasionHeading=document.createElement('p');occasionHeading.className='menu-section-label mobile-occasion-heading';occasionHeading.textContent='Shop by occasion';acc.prepend(header,paths,occasionHeading);
 const favourites=document.createElement('div');favourites.className='mobile-menu-featured';favourites.innerHTML='<a href="shop.html?collection=new-arrivals">New Arrivals '+chevron+'</a><a href="shop.html?collection=best-sellers">Best Sellers '+chevron+'</a>';acc.append(favourites);
 const hero=$('#hero');if(hero&&!$('.mobile-shop-your-way')){const section=document.createElement('section');section.className='mobile-shop-your-way';section.setAttribute('aria-labelledby','shop-your-way-title');section.innerHTML='<span class="kicker">Find what you love</span><h2 id="shop-your-way-title">Shop your way</h2><div class="shop-your-way-links">'+Object.keys(text).map(key=>`<button type="button" data-mobile-pathway="${key}" aria-expanded="false" aria-label="${text[key].title}" aria-haspopup="dialog" aria-controls="drawer"><span class="shopping-path-icon">${icon(key)}</span><small>Shop by</small><strong>${key==='purpose'?'Type':key[0].toUpperCase()+key.slice(1)}</strong><span class="shortcut-chevron">${chevron}</span></button>`).join('')+'</div>';hero.after(section);}
}

function setupMobileNavigation(){
 const drawer=$('#drawer');if(!drawer)return;
 drawer.classList.add('fc-mobile-drawer');drawer.setAttribute('aria-hidden','true');document.body.append(drawer);
 const dialog=$('.dpanel',drawer);dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');dialog.setAttribute('aria-label','Shop categories');
 const drawerHeading=$('.dhead>span',drawer);if(drawerHeading){const brand=document.createElement('a');brand.href='./';brand.className='drawer-logo logo-on-white';brand.setAttribute('aria-label','Flutter Creations home');brand.innerHTML='<img src="assets/brand/logo-white.png" alt="Flutter Creations" width="844" height="339">';drawerHeading.replaceWith(brand);}
 $$('.qchips',drawer).forEach(el=>el.remove());promoteMobileShoppingPaths(drawer);
 if(!$('.story')&&!$('.home-stories')){const nav=document.createElement('nav');nav.className='mobile-circle-menu';nav.setAttribute('aria-label','Browse occasion categories');nav.innerHTML=groups.occasion.items.map(v=>`<a href="${url('occasion',v)}" data-mobile-category="${v}"><span class="circle-icon circle-${v}"><svg class="menu-icon" aria-hidden="true"><use href="#c-${v}"/></svg></span>${v}</a>`).join('')+'<a href="info.html?page=custom"><span class="circle-icon circle-Custom"><svg class="menu-icon" aria-hidden="true"><use href="#c-Custom"/></svg></span>Custom</a>';($('.browse-nav')||$('.store-header')).after(nav);}
 $$('.story,.home-stories>a,.mobile-circle-menu>a').forEach(a=>{const v=groups.occasion.items.find(v=>a.textContent.trim()===v);if(v){a.dataset.mobileCategory=v;a.setAttribute('aria-haspopup','dialog');a.setAttribute('aria-controls','drawer');}});
 $$('.mobile-themed-category',drawer).forEach((details,i)=>{details.dataset.mobileCategory=groups.occasion.items[i];});
 const menuSections=$$('.mobile-category',drawer);
 function syncMobileSections(){
  menuSections.forEach(details=>$('summary',details).setAttribute('aria-expanded',String(details.open)));
  const visible=drawer.classList.contains('on'),active=menuSections.find(details=>details.open);
  $$('[data-mobile-category][aria-haspopup]').forEach(a=>a.setAttribute('aria-expanded',String(visible&&a.dataset.mobileCategory===active?.dataset.mobileCategory)));
  $$('[data-mobile-pathway]').forEach(b=>b.setAttribute('aria-expanded',String(visible&&b.dataset.mobilePathway===active?.dataset.shoppingPath)));
 }
 menuSections.forEach(details=>{
  details.setAttribute('name','fc-mobile-menu');
  const summary=$('summary',details),indicator=document.createElement('span');
  indicator.className='mobile-dropdown-chevron';indicator.setAttribute('aria-hidden','true');indicator.innerHTML='<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>';summary.append(indicator);
  summary.addEventListener('click',()=>{if(!details.open)menuSections.forEach(other=>{if(other!==details)other.open=false;});});
  details.addEventListener('toggle',()=>{
   if(details.open)menuSections.forEach(other=>{if(other!==details)other.open=false;});
   syncMobileSections();
   if(details.open&&drawer.classList.contains('on'))requestAnimationFrame(()=>{if(details.open&&drawer.classList.contains('on'))dialog.scrollTo({top:Math.max(0,details.offsetTop-100),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});});
  });
 });
 syncMobileSections();
 let returnFocus=null,previousOverflow='';
 function open(category,trigger,pathway){returnFocus=trigger||document.activeElement;previousOverflow=document.body.style.overflow;drawer.classList.add('on');drawer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';const sections=$$('.mobile-themed-category',drawer);sections.forEach(d=>d.open=d.dataset.mobileCategory===category);$$('.mobile-shopping-path',drawer).forEach(d=>d.open=d.dataset.shoppingPath===pathway);$$('[data-mobile-category][aria-haspopup]').forEach(a=>a.setAttribute('aria-expanded',String(a.dataset.mobileCategory===category)));$$('[data-mobile-pathway]').forEach(b=>b.setAttribute('aria-expanded',String(b.dataset.mobilePathway===pathway)));const active=pathway?$('[data-shopping-path="'+pathway+'"]',drawer):sections.find(d=>d.open);requestAnimationFrame(()=>{const target=active?$('summary',active):$('[data-close]',drawer);target?.focus({preventScroll:true});dialog.scrollTo({top:active?Math.max(0,active.offsetTop-85):0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});});}
 function close(){drawer.classList.remove('on');drawer.setAttribute('aria-hidden','true');document.body.style.overflow=previousOverflow;$$('[data-mobile-category][aria-haspopup]').forEach(a=>a.setAttribute('aria-expanded','false'));$$('[data-mobile-pathway]').forEach(b=>b.setAttribute('aria-expanded','false'));returnFocus?.focus({preventScroll:true});}
 document.addEventListener('click',e=>{const path=e.target.closest('[data-mobile-pathway]');if(path){e.preventDefault();open(null,path,path.dataset.mobilePathway);return;}const circle=e.target.closest('[data-mobile-category][aria-haspopup]');if(circle&&matchMedia('(max-width:860px)').matches){e.preventDefault();open(circle.dataset.mobileCategory,circle);return;}const trigger=e.target.closest('[data-open="drawer"]');if(trigger){e.preventDefault();open(null,trigger);}if(e.target.closest('[data-close="drawer"]'))close();});
 document.addEventListener('keydown',e=>{if(!drawer.classList.contains('on'))return;if(e.key==='Escape'){close();return;}if(e.key==='Tab'){const focusable=$$('a[href],button,input,summary',dialog).filter(el=>el.getClientRects().length),first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
 matchMedia('(max-width:860px)').addEventListener('change',e=>{if(!e.matches&&drawer.classList.contains('on'))close();});
}
function addFloatingWhatsApp(){
 const link=document.createElement('a');link.className='floating-whatsapp';link.href='https://wa.me/923008463584';link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','Chat with Flutter Creations on WhatsApp');link.innerHTML='<span class="whatsapp-tooltip">Let’s make something lovely</span><span class="whatsapp-halo" aria-hidden="true"></span><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3a12.86 12.86 0 0 0-11.1 19.35L3.1 29l6.83-1.79A12.94 12.94 0 1 0 16.04 3Zm0 23.7a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.05 1.06 1.08-3.95-.25-.4a10.76 10.76 0 1 1 9.06 5.01Zm5.91-8.06c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.22.05-.4-.03-.57-.08-.16-.72-1.72-.99-2.36-.26-.62-.53-.54-.72-.55h-.61c-.22 0-.57.08-.86.4-.3.33-1.13 1.1-1.13 2.68 0 1.58 1.16 3.11 1.32 3.32.16.22 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.1 1.9-.78 2.16-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z"/></svg><span class="whatsapp-spark" aria-hidden="true">✦</span>';document.body.append(link);
}

function applyEditorialDesign(){
 const arrow='<span class="c-button-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></span>';
 const originalSteps=$('.steps');
 if(originalSteps){const section=originalSteps.closest('section');section.classList.add('c-custom-section');const heading=$('.shead',section);const intro=$('.shead p',section);if(!intro){const p=document.createElement('p');p.className='c-section-intro';p.textContent='Planned and confirmed with you on WhatsApp before we make anything.';heading.after(p);}$$('.shead>a,.wa',section).forEach(a=>a.remove());const list=document.createElement('ol');list.className='c-steps';list.innerHTML=$$('.step',originalSteps).map((step,i)=>`<li class="c-step"><span class="c-n" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><div><h3>${esc($('h3',step).textContent)}</h3><p>${esc($('p',step).textContent)}</p></div></li>`).join('');originalSteps.replaceWith(list);section.insertAdjacentHTML('beforeend',`<a class="c-order-button" href="info.html?page=custom"><span>Start a custom order</span>${arrow}</a>`);}
 const existingBulk=$('.bulk,.band.disc');
 if(existingBulk){const wrap=existingBulk.closest('section');wrap.classList.add('c-bulk-section');existingBulk.outerHTML=`<div class="c-bulk"><div class="c-bulk-copy"><p class="eyebrow">Bulk pricing</p><h2>Order more,<br><em>pay less per piece.</em></h2><p class="c-bulk-intro">Planning a larger celebration? Pick a quantity for a personalised quote.</p></div><div class="c-bulk-controls"><div class="c-stepper"><button type="button" data-c-minus aria-label="Fewer pieces">−</button><div class="c-val"><b aria-live="polite" data-c-value>100</b><small>pieces</small></div><button type="button" data-c-plus aria-label="More pieces">+</button></div><div class="c-quick" aria-label="Choose a bulk quantity">${[50,100,200,500].map(q=>`<button type="button" data-c-quantity="${q}" aria-pressed="${q===100}">${q}</button>`).join('')}</div><a class="c-quote-button" data-c-quote target="_blank" rel="noopener noreferrer"><span>Request quote on WhatsApp</span>${arrow}</a></div></div>`;
 const quantities=[25,50,75,100,150,200,300,500,750,1000];let i=3;const card=$('.c-bulk');function draw(){const q=quantities[i],label=q===1000?'1000+':String(q);$('[data-c-value]',card).textContent=label;$('[data-c-minus]',card).disabled=i===0;$('[data-c-plus]',card).disabled=i===quantities.length-1;$$('[data-c-quantity]',card).forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.cQuantity===q)));$('[data-c-quote]',card).href='https://wa.me/923008463584?text='+encodeURIComponent('Hi Flutter Creations! I would like a bulk quote for '+label+' pieces.');}$('[data-c-minus]',card).onclick=()=>{if(i>0){i--;draw();}};$('[data-c-plus]',card).onclick=()=>{if(i<quantities.length-1){i++;draw();}};$$('[data-c-quantity]',card).forEach(b=>b.onclick=()=>{i=quantities.indexOf(+b.dataset.cQuantity);draw();});draw();}
 const customSection=$('.c-custom-section'),bulkSection=$('.c-bulk-section');if(customSection&&bulkSection&&customSection.parentElement===bulkSection.parentElement)customSection.after(bulkSection);
 const infoSteps=$('.steps-editorial');if(infoSteps){infoSteps.classList.add('c-info-steps');}
 const trust=$('[data-desktop-trust]');if(trust)trust.closest('section').classList.add('desktop-trust-section');
}

function closeNav(){$$('.browse-group>button').forEach(b=>{b.setAttribute('aria-expanded','false');b.nextElementSibling.hidden=true;});}
function home(){const prods=$('#prods');if(prods){prods.className='product-grid';prods.innerHTML=[products[1],products[7],products[19],products[12],products[3],products[8]].map(tile).join('');}
 const hero=$('#hero');if(hero&&!$('.home-stories')&&!$('#stories')){const stories=document.createElement('div');stories.className='home-stories';stories.innerHTML=groups.occasion.items.map((v,i)=>`<a href="${url('occasion',v)}"><span><svg class="ic"><use href="#c-${v}"/></svg></span>${v}</a>`).join('')+`<a href="info.html?page=custom"><span>✧</span>Custom</a>`;hero.before(stories);}
 $$('.story').forEach(a=>{const value=groups.occasion.items.find(v=>a.textContent.includes(v));a.href=value?url('occasion',value):'info.html?page=custom';});$$('.ccard,.cat').forEach(a=>{const value=groups.occasion.items.find(v=>a.textContent.includes(v));if(value)a.href=url('occasion',value);});const saved=$$('.mbar a').find(a=>a.textContent.includes('Saved'));if(saved){saved.innerHTML='<svg class="ic"><use href="#i-search"/></svg>Search';saved.href='shop.html?search=1';}const anchor=$('#cats')?.closest('section');if(anchor){const section=document.createElement('section');section.className='wrap material-section';section.innerHTML=`<div class="shead"><div><span class="eyebrow">The perfect finishing touch</span><h2>A material for every moment</h2></div><a href="shop.html">Explore the collection ↗</a></div><div class="material-grid">${groups.material.items.map((v,i)=>{const p=products.find(p=>p.material===v);return `<a href="${url('material',v)}"><img src="${p.image}" alt="${v} creations" loading="lazy"><span><small>SHOP THE COLLECTION</small><b>${v}</b><i>↗</i></span></a>`;}).join('')}</div>`;anchor.after(section);}
 // Resolve the supplied mockup links into actual collection and product pages.
 $$('a[href="#"]').forEach(a=>{let text=a.textContent.trim(),image=$('img',a),p=image&&products.find(p=>p.image===image.getAttribute('src')||p.image2===image.getAttribute('src'));if(p){a.href='product.html?id='+p.id;return;}let found=false;for(const [k,g]of Object.entries(groups)){for(const value of [...g.items,...Object.values(g.subs).flat()]){if(text.toLowerCase().includes(value.toLowerCase())){a.href=url(k,value);found=true;break;}}if(found)break;}if(!found)a.href=/custom|idea|quote/i.test(text)?'info.html?page=custom':/home|Flutter Creations/i.test(text)?'./':/delivery/i.test(text)?'info.html?page=delivery':/payment|advance/i.test(text)?'info.html?page=payment':/faq|discount/i.test(text)?'info.html?page=faq':/about/i.test(text)?'info.html?page=about':/contact|address/i.test(text)?'info.html?page=contact':'shop.html';});
 $$('form.search').forEach(f=>{f.removeAttribute('onsubmit');f.action='shop.html';$('input',f).name='q';});
 $$('.hacts a,.mIcon[aria-label="Cart"],.ibtn[aria-label^="Cart"],.mbar a').filter(a=>/Cart|Bag/.test(a.textContent)||(a.getAttribute('aria-label')||'').startsWith('Cart')).forEach(a=>{a.href='#bag';a.dataset.cart='';});
 $$('.copy .tlink').forEach(a=>a.href='info.html?page=custom');
 $$('.tr span,footer a').forEach(e=>{if(e.textContent.includes('[SHOP ADDRESS]')){e.textContent='Lahore, Pakistan · Contact us to arrange a visit';if(e.tagName==='A')e.href='info.html?page=contact';}});
 const s=$('.slide');if(s){const h=$('h2',s);if(h){const h1=document.createElement('h1');h1.className=h.className;h1.innerHTML=h.innerHTML;h.replaceWith(h1);}}
}
function collection(){
 const state=new URLSearchParams(location.search);
 if(state.has('category')){state.set('occasion',state.get('category'));state.delete('category');}
 ['min','max'].forEach(key=>{if(state.has(key)&&(!state.get(key).trim()||!Number.isFinite(Number(state.get(key)))||Number(state.get(key))<0))state.delete(key);});
 const selectedCollection=curatedCollections[state.get('collection')];
 const heading=[...Object.keys(groups)].map(k=>state.getAll(k)).flat().filter(Boolean).join(' · ')||(selectedCollection?selectedCollection.title:state.get('q')?'Search results':'All creations');
 const filterLabels={purpose:'Product Type',material:'Material',need:'Options'};
 const filterSummary=label=>`<summary><span>${label}</span><small class="filter-selection-count" hidden></small><span class="filter-expand-icon" aria-hidden="true"></span></summary>`;
 document.title=heading+' | Flutter Creations';
 main.innerHTML=`<div class="page-container collection-page">
  <div class="crumb"><a href="./">Home</a> / <a href="shop.html">Shop</a> / ${esc(heading)}</div>
  <div class="collection-layout">
   <aside class="filter-sidebar" id="collection-filters" aria-label="Product filters">
    <div class="filter-head"><h2>Shop by</h2><button id="clear-filters">Clear all</button><button class="close-filters" aria-label="Close filters">×</button></div>
    ${Object.entries(groups).filter(([key])=>key!=='occasion').map(([key,g])=>`<details class="filter-group" data-filter-group="${key}">${filterSummary(filterLabels[key])}<div class="filter-group-body">${[...g.items,...Object.values(g.subs).flat()].filter(v=>products.some(p=>match(p,key,v))).map(v=>`<label class="filter-option"><input type="checkbox" name="${key}" value="${esc(v)}" ${state.getAll(key).includes(v)?'checked':''}><span>${esc(v)}</span><small>${products.filter(p=>match(p,key,v)).length}</small></label>`).join('')}</div></details>`).join('')}
    <details class="filter-group" data-filter-group="price">${filterSummary('Price (PKR)')}<div class="filter-group-body">
     <p class="filter-currency-note">Pakistani rupees · per piece</p>
     <div class="filter-price-range"><label class="filter-search">Minimum (Rs.)<input type="number" min="0" step="any" inputmode="decimal" id="min-price" placeholder="0" value="${esc(state.get('min')||'')}"></label><span aria-hidden="true">–</span><label class="filter-search">Maximum (Rs.)<input type="number" min="0" step="any" inputmode="decimal" id="max-price" placeholder="Any" value="${esc(state.get('max')||'')}"></label></div>
     <label class="filter-option"><input type="checkbox" id="priced" ${state.has('priced')?'checked':''}><span>Show priced products only</span></label>
    </div></details>
    <details class="filter-group" data-filter-group="q">${filterSummary('Search collection')}<div class="filter-group-body"><label class="filter-search">Product name or detail<input id="filter-q" type="search" placeholder="Box, crochet, ribbon…" value="${esc(state.get('q')||'')}"></label></div></details>
   </aside>
   <section class="collection-results" aria-label="Products">
    <div class="collection-intro"><h1 class="page-title">${esc(heading)}</h1><p>Beautiful little details for your biggest moments. Find your favourite, then make it yours.</p></div>
    <div class="collection-tools"><span id="result-count" aria-live="polite"></span><button class="filter-toggle secondary-button" aria-expanded="false" aria-controls="collection-filters">Filters ☷</button><label>Sort by <select class="sort" id="sort"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="name">Name: A–Z</option></select></label></div>
    <div class="active-filters" id="active-filters"></div><div class="product-grid" id="results"></div>
   </section>
  </div>
 </div>`;
 const sort=$('#sort');sort.value=state.get('sort')||'featured';
 function render(){
  const base=selectedCollection?selectedCollection.ids.map(id=>products.find(p=>p.id===id)).filter(Boolean):products;
  let result=base.filter(p=>Object.keys(groups).every(k=>!state.getAll(k).length||state.getAll(k).some(v=>match(p,k,v))));
  const q=(state.get('q')||'').toLowerCase().trim();
  if(q)result=result.filter(p=>(p.name+' '+p.category+' '+p.material+' '+p.purpose+' '+p.occasion.join(' ')).toLowerCase().includes(q));
  if(state.has('min'))result=result.filter(p=>p.price>0&&p.price>=Number(state.get('min')));
  if(state.has('max'))result=result.filter(p=>p.price>0&&p.price<=Number(state.get('max')));
  if(state.has('priced'))result=result.filter(p=>p.price>0);
  if(sort.value==='low')result.sort((a,b)=>(a.price||Infinity)-(b.price||Infinity));
  if(sort.value==='high')result.sort((a,b)=>b.price-a.price);
  if(sort.value==='name')result.sort((a,b)=>a.name.localeCompare(b.name));
  $('#results').innerHTML=result.length?result.map(tile).join(''):`<div class="empty-state"><h2>No creations match just yet.</h2><p>Try removing a filter or searching for a different detail.</p><button class="secondary-button" data-reset>Clear filters</button></div>`;
  $('#result-count').textContent=result.length+' creation'+(result.length===1?'':'s');
  const active=[...state.entries()].filter(([k])=>Object.keys(filterLabels).includes(k)||['q','min','max','priced'].includes(k));
  $('#active-filters').innerHTML=active.map(([k,v])=>`<button class="chip" data-remove-key="${esc(k)}" data-remove-value="${esc(v)}">${esc(k==='min'?'From '+money(v):k==='max'?'Up to '+money(v):k==='priced'?'Priced products':v)} ×</button>`).join('');
  $$('.filter-group').forEach(details=>{
   const key=details.dataset.filterGroup,count=key==='price'?Number(state.has('min')||state.has('max'))+Number(state.has('priced')):state.getAll(key).length;
   const badge=$('.filter-selection-count',details);badge.textContent=count;badge.hidden=!count;badge.setAttribute('aria-label',count+' active filter'+(count===1?'':'s'));
  });
  $('.filter-toggle').textContent='Filters'+(active.length?' ('+active.length+')':'')+' ☷';
  history.replaceState(null,'','shop.html'+(state.size?'?'+state:''));
 }
 $('.filter-sidebar').addEventListener('change',e=>{
  const t=e.target;
  if(t.name){const selected=$$('input[name="'+t.name+'"]:checked').map(x=>x.value);state.delete(t.name);selected.forEach(v=>state.append(t.name,v));}
  else if(t.id==='min-price'||t.id==='max-price'){
   const key=t.id==='min-price'?'min':'max',value=Number(t.value);
   if(t.value&&Number.isFinite(value)&&value>=0)state.set(key,String(value));else{state.delete(key);t.value='';}
  }else if(t.id==='priced'){t.checked?state.set('priced','1'):state.delete('priced');}
  render();
 });
 $('#filter-q').addEventListener('input',e=>{e.target.value?state.set('q',e.target.value):state.delete('q');render();});
 sort.addEventListener('change',()=>{state.set('sort',sort.value);render();});
 function resetFilters(){const clean=new URLSearchParams();['occasion','collection'].forEach(key=>state.getAll(key).forEach(value=>clean.append(key,value)));location.href='shop.html'+(clean.size?'?'+clean:'');}
 $('#clear-filters').onclick=resetFilters;
 main.addEventListener('click',e=>{const b=e.target.closest('[data-remove-key]');if(b){state.delete(b.dataset.removeKey,b.dataset.removeValue);location.href='shop.html?'+state;}if(e.target.closest('[data-reset]'))resetFilters();});
 $('.close-filters').onclick=()=>{$('.filter-sidebar').classList.remove('filters-open');$('.filter-toggle').setAttribute('aria-expanded','false');$('.filter-toggle').focus();};
 $('.filter-toggle').onclick=e=>{const open=$('.filter-sidebar').classList.toggle('filters-open');e.currentTarget.setAttribute('aria-expanded',String(open));};
 render();
}
function product(){const p=products.find(p=>p.id===params.get('id'));if(!p){main.innerHTML='<div class="empty-state"><h1>Creation not found</h1><a href="shop.html">Explore all creations</a></div>';return;}document.title=p.name+' | Flutter Creations';main.innerHTML=`<div class="page-container"><div class="crumb"><a href="./">Home</a> / <a href="${url('occasion',p.category)}">${p.category}</a> / ${esc(p.name)}</div><div class="product-detail"><div class="product-gallery"><img class="main-product-image" src="${p.image}" alt="${esc(p.name)}"><div class="image-thumbs">${[p.image,p.image2].filter(Boolean).map((src,i)=>`<button aria-label="View image ${i+1}" aria-pressed="${i===0}"><img src="${src}" alt="${esc(p.name)} — view ${i+1}"></button>`).join('')}</div></div><div class="product-copy"><span class="kicker">${p.category} · ${p.material}</span><h1>${esc(p.name)}</h1><div class="detail-price">${p.price?money(p.price)+' <small>per piece · reference price</small>':'Price on request'}</div><p>A thoughtful finishing touch, made personal for your celebration. Share your details and we’ll help bring it together.</p><div class="soft-note">Personalisation, availability, minimum quantities and bulk pricing are confirmed with you on WhatsApp before ordering.</div><form id="product-form"><label class="field">Names or message for your tag<input name="personalisation" maxlength="150" placeholder="e.g. Ayesha & Ahmed · 24 December"></label><label class="field">Notes for our team<textarea name="notes" maxlength="500" placeholder="Tell us about your colours, event or preferred finish"></textarea></label><label class="field">Quantity<input name="quantity" type="number" min="1" max="10000" value="1" required></label><div class="qty-row">${[25,50,100,250].map(n=>`<button type="button" class="qty-preset" data-qty="${n}">${n} pieces</button>`).join('')}</div><div class="product-total"><span>Estimated total</span><strong id="estimate">${p.price?money(p.price):'Request a quote'}</strong></div><div class="product-actions"><button class="primary-button" type="submit">Add to bag</button><a class="secondary-button" href="https://wa.me/923008463584?text=${encodeURIComponent('Hi! I would like to enquire about '+p.name)}">Ask on WhatsApp ↗</a></div></form><div class="detail-accordions"><details open><summary>Made for your moment</summary><p>Choose this design as your starting point. Ask our team about available sizes, colours, fillings and personalised details.</p></details><details><summary>Delivery & ordering</summary><p>Share your event date and delivery city with us. We’ll confirm the production schedule, delivery charge and payment details before your order is placed.</p></details></div></div></div><section class="related"><span class="kicker">MORE LITTLE LOVELIES</span><h2>You might also love</h2><div class="product-grid">${products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4).map(tile).join('')}</div></section></div>`;
 const form=$('#product-form');const qty=form.elements.quantity;qty.oninput=()=>$('#estimate').textContent=p.price?money(p.price*(+qty.value||0)):'Request a quote';$$('[data-qty]').forEach(b=>b.onclick=()=>{qty.value=b.dataset.qty;qty.oninput();});$$('.image-thumbs button').forEach(b=>b.onclick=()=>{$('.main-product-image').src=$('img',b).src;$$('.image-thumbs button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));});form.onsubmit=e=>{e.preventDefault();bag.push({id:p.id,qty:+qty.value,personalisation:form.elements.personalisation.value,notes:form.elements.notes.value});save();openBag();};}
let previousFocus;
function openBag(){previousFocus=document.activeElement;$('.fc-overlay')?.remove();const el=document.createElement('div');el.className='fc-overlay open';el.innerHTML=`<section class="fc-bag" role="dialog" aria-modal="true" aria-label="Shopping bag"><div class="fc-bag-head"><h2>Your lovely little bag</h2><button class="fc-close" aria-label="Close bag">×</button></div><div class="fc-bag-items">${bag.length?bag.map((item,i)=>{const p=products.find(p=>p.id===item.id);return `<div class="bag-item"><img src="${p.image}" alt="${esc(p.name)}"><div><h3><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3><p>${p.price?money(p.price):'Quote required'} per piece</p><p>${esc(item.personalisation||'')}</p><div class="bag-controls"><button data-adjust="${i}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-adjust="${i}" data-delta="1" aria-label="Increase quantity">+</button><button class="remove" data-remove="${i}">Remove</button></div></div></div>`;}).join(''):'<div class="empty-state"><h2>A little room for something lovely.</h2><a class="primary-button" href="shop.html">Explore creations</a></div>'}</div>${bag.length?`<div class="fc-bag-foot"><div class="product-total"><span>Estimated subtotal</span><strong>${money(bag.reduce((s,b)=>s+products.find(p=>p.id===b.id).price*b.qty,0))}</strong></div><small>Quote-only products and delivery are confirmed separately. No payment is collected on this preview.</small><a class="primary-button" href="checkout.html">Prepare your enquiry ↗</a></div>`:''}</section>`;document.body.append(el);document.body.style.overflow='hidden';$('.fc-close',el).focus();el.addEventListener('click',e=>{if(e.target===el||e.target.closest('.fc-close'))closeBag();const a=e.target.closest('[data-adjust]'),r=e.target.closest('[data-remove]');if(a){const item=bag[+a.dataset.adjust];item.qty=Math.max(1,item.qty+(+a.dataset.delta));save();openBag();}if(r){bag.splice(+r.dataset.remove,1);save();openBag();}});}
function closeBag(){$('.fc-overlay')?.remove();document.body.style.overflow='';previousFocus?.focus();}
function checkout(){main.innerHTML=`<div class="page-container"><span class="kicker">LET’S MAKE IT PERSONAL</span><h1 class="page-title">Your celebration starts here.</h1><p>Prepare an enquiry to send on WhatsApp. Prices, availability, delivery and payment will be confirmed by our team.</p>${!bag.length?'<div class="empty-state"><h2>Your bag is empty</h2><a class="primary-button" href="shop.html">Find your favourites</a></div>':`<div class="checkout-layout"><form class="checkout-form" id="enquiry"><h2>A few lovely details</h2><label class="field">Your name<input name="customer" required maxlength="100" autocomplete="name"></label><label class="field">Delivery city<input name="city" required maxlength="100" autocomplete="address-level2"></label><label class="field">Event date<input name="date" type="date" required></label><label class="field">Anything else we should know?<textarea name="notes" maxlength="1000"></textarea></label><button class="primary-button">Continue to WhatsApp ↗</button><p class="form-status">This opens WhatsApp with your enquiry. You review and send it there.</p></form><div class="summary-box"><h2>Your selection</h2>${bag.map(b=>{const p=products.find(p=>p.id===b.id);return `<div class="summary-line"><span>${esc(p.name)} × ${b.qty}</span><strong>${p.price?money(p.price*b.qty):'Quote'}</strong></div>`;}).join('')}<div class="product-total"><span>Estimated subtotal</span><strong>${money(bag.reduce((s,b)=>s+products.find(p=>p.id===b.id).price*b.qty,0))}</strong></div><small>Excludes quote-only items and delivery.</small><button class="secondary-button" data-cart>Edit bag</button></div></div>`}</div>`;const f=$('#enquiry');if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f),text=`Hello Flutter Creations!\nName: ${d.get('customer')}\nCity: ${d.get('city')}\nEvent date: ${d.get('date')}\n\n`+bag.map(b=>{const p=products.find(p=>p.id===b.id);return `${p.name} — ${b.qty} pieces\nTag: ${b.personalisation||'To confirm'}\nNotes: ${b.notes||'None'}`;}).join('\n\n')+'\n\n'+d.get('notes')+'\nPlease confirm pricing, availability and delivery.';location.href='https://wa.me/923008463584?text='+encodeURIComponent(text);};}
function info(){const key=params.get('page')||'about';const pages={about:['Little details. Lasting memories.','Flutter Creations brings together favour boxes, gifts and decor for celebrations big and small. Explore our collections and speak with our Lahore team to make your chosen design personal.'],custom:['Your idea, made by us.','A favourite colour. A name. A tiny detail that means everything. Tell us what you’re celebrating and we’ll help you choose your packaging, filling and personal touches.'],contact:['Let’s make something lovely.','Tell us about your event, your quantity and your delivery city. Our team can help you choose a design and confirm the details.'],delivery:['From Lahore, with love.','Please share your city and event date before ordering. Our team will confirm production time, available delivery options and charges for your location.'],payment:['A thoughtful start to your order.','Confirm your design, quantity, delivery date and total with our team on WhatsApp. They will provide current payment instructions. This preview does not process payments.'],faq:['A little help, along the way.','Everything starts with your celebration. If you have a question about a particular product, send us its name on WhatsApp.']};const [title,copy]=pages[key]||pages.about;document.title=title+' | Flutter Creations';main.innerHTML=`<div class="page-container editorial"><div class="crumb"><a href="./">Home</a> / ${esc(key)}</div><span class="kicker">FLUTTER CREATIONS</span><h1 class="page-title">${title}</h1><p class="lead">${copy}</p>${key==='custom'?'<div class="steps-editorial"><div><b>01</b><h2>Choose your creation</h2><p>Start with a box, bag or gift you love.</p></div><div><b>02</b><h2>Add your little details</h2><p>Share names, colours, quantities and your event date.</p></div><div><b>03</b><h2>Make it happen</h2><p>Confirm the design and quote with our team.</p></div></div>':''}<div class="contact-links"><a class="primary-button" href="https://wa.me/923008463584">Chat on WhatsApp ↗</a><a class="secondary-button" href="shop.html">Explore creations</a></div><p><a href="mailto:creationsflutter@gmail.com">creationsflutter@gmail.com</a> · Lahore, Pakistan</p><div class="faq">${[['Can I personalise my order?','Share your names, message, colours and event details with our team. Available options depend on the design.'],['Do you take bulk orders?','Yes, enquire with your preferred product and quantity for a confirmed quote and production schedule.'],['How do I order?','Add your favourites to the bag and prepare an enquiry. WhatsApp opens with your selection for you to review and send.'],['Is payment collected here?','No. This storefront currently prepares enquiries. Your order and payment details are confirmed by the team.']].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div>`;}
nav();if(main){let file=location.pathname.split('/').pop();if(file==='product.html')product();else if(file==='checkout.html')checkout();else if(file==='info.html')info();else collection();}else {home();setupHeroSlider();}
applyEditorialDesign();updateCount();setupMobileNavigation();addFloatingWhatsApp();
document.addEventListener('click',e=>{if(e.target.closest('[data-cart]')){e.preventDefault();openBag();}if(!e.target.closest('.browse-nav'))closeNav();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeNav();closeBag();$('.filter-sidebar')?.classList.remove('filters-open');$('.filter-toggle')?.setAttribute('aria-expanded','false');}if(e.key==='Tab'&&$('.fc-overlay')){const f=$$('a[href],button,input', $('.fc-bag')),first=f[0],last=f.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
document.addEventListener('error',e=>{if(e.target.tagName==='IMG'){e.target.style.opacity='.35';e.target.alt=e.target.alt||'Product image unavailable';}},true);
})();

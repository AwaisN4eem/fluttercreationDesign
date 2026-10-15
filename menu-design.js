/* Decorative SVG assets preserved from the supplied homepage. */
(()=>{
const decorations = {
  Wedding: {
    bg: '#FFF8EE', accent: '#E07B1F',
    top: '<svg width="100%" height="64" aria-hidden="true"><defs><pattern id="pt-wed" width="56" height="64" patternUnits="userSpaceOnUse">'
      + '<path d="M0 5 Q28 24 56 5" fill="none" stroke="#C0392B" stroke-width="2.2"/>'
      + '<path d="M0 5 Q28 18 56 5" fill="none" stroke="#D4AF37" stroke-width="1.2"/>'
      + '<line x1="28" y1="5" x2="28" y2="52" stroke="#3E8E41" stroke-width="1.2"/>'
      + '<circle cx="28" cy="14" r="5.5" fill="#F39C12"/><circle cx="28" cy="25" r="5.5" fill="#F5C518"/><circle cx="28" cy="36" r="5.5" fill="#F39C12"/><circle cx="28" cy="47" r="5" fill="#E74C3C"/>'
      + '<circle cx="28" cy="14" r="2" fill="#E67E22"/><circle cx="28" cy="25" r="2" fill="#F39C12"/><circle cx="28" cy="36" r="2" fill="#E67E22"/>'
      + '<path d="M0 5 l-6 16 l6 -4 l6 4 Z" fill="#3E8E41"/><path d="M56 5 l-6 16 l6 -4 l6 4 Z" fill="#3E8E41"/>'
      + '</pattern></defs><rect width="100%" height="5" fill="#D4AF37"/><rect y="0" width="100%" height="64" fill="url(#pt-wed)"/></svg>',
    corner: '<svg viewBox="0 0 170 120" width="170" height="120" aria-hidden="true">'
      /* dhol */
      + '<g transform="translate(6 34)"><path d="M10 6 Q40 -4 70 6 L70 66 Q40 76 10 66 Z" fill="#C0392B"/>'
      + '<ellipse cx="10" cy="36" rx="9" ry="30" fill="#F5C518" stroke="#8E5A12" stroke-width="2"/><ellipse cx="70" cy="36" rx="9" ry="30" fill="#F5C518" stroke="#8E5A12" stroke-width="2"/>'
      + '<path d="M14 10 L28 62 L42 10 L56 62 L66 14" fill="none" stroke="#fff" stroke-width="2"/>'
      + '<path d="M18 4 Q40 -2 62 4" fill="none" stroke="#D4AF37" stroke-width="3"/><path d="M18 68 Q40 74 62 68" fill="none" stroke="#D4AF37" stroke-width="3"/></g>'
      /* rings */
      + '<g transform="translate(104 52)"><circle cx="16" cy="30" r="15" fill="none" stroke="#D4AF37" stroke-width="5"/><circle cx="38" cy="30" r="15" fill="none" stroke="#E8C766" stroke-width="5"/>'
      + '<path d="M10 10 l6 -8 l6 8 l-6 8 Z" fill="#A8E0F0" stroke="#5DADE2" stroke-width="1.2"/></g>'
      + '<circle cx="96" cy="22" r="5" fill="#F39C12"/><circle cx="110" cy="14" r="4" fill="#F5C518"/><circle cx="150" cy="24" r="5" fill="#E74C3C"/></svg>'
  },
  Baby: {
    bg: '#F6FAFF', accent: '#7FB8E6',
    top: '<svg width="100%" height="64" aria-hidden="true"><defs><pattern id="pt-baby" width="200" height="64" patternUnits="userSpaceOnUse">'
      + '<path d="M0 6 Q50 18 100 6 Q150 18 200 6" fill="none" stroke="#B9A6D9" stroke-width="2"/>'
      + '<polygon points="8,8 40,13 24,44" fill="#F7B6C8"/><polygon points="58,13 90,9 74,44" fill="#A9D6F5"/>'
      + '<polygon points="108,8 140,13 124,44" fill="#FBE29F"/><polygon points="158,13 190,9 174,44" fill="#BFE8D7"/>'
      + '<circle cx="24" cy="22" r="3" fill="#fff"/><circle cx="74" cy="22" r="3" fill="#fff"/><circle cx="124" cy="22" r="3" fill="#fff"/><circle cx="174" cy="22" r="3" fill="#fff"/>'
      + '</pattern></defs><rect width="100%" height="64" fill="url(#pt-baby)"/></svg>',
    corner: '<svg viewBox="0 0 170 120" width="170" height="120" aria-hidden="true">'
      + '<path d="M20 92 a18 18 0 0 1 10 -32 a24 24 0 0 1 44 -6 a16 16 0 0 1 20 22 a14 14 0 0 1 -6 16 Z" fill="#fff" stroke="#A9D6F5" stroke-width="3"/>'
      + '<path d="M120 20 q10 18 28 22 q-18 4 -28 22 q-10 -18 -28 -22 q18 -4 28 -22 Z" fill="#FBE29F"/>'
      + '<path d="M140 74 l3 7 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1 Z" fill="#F7B6C8"/>'
      + '<g transform="translate(96 70)"><circle cx="12" cy="12" r="11" fill="#F7B6C8"/><circle cx="12" cy="12" r="5" fill="#fff"/><rect x="10" y="22" width="4" height="22" rx="2" fill="#A9D6F5"/></g>'
      + '<circle cx="40" cy="30" r="4" fill="#BFE8D7"/><circle cx="62" cy="16" r="3" fill="#A9D6F5"/></svg>'
  },
  Birthday: {
    bg: '#FFF7FB', accent: '#E84A8A',
    top: '<svg width="100%" height="64" aria-hidden="true"><defs><pattern id="pt-bday" width="180" height="64" patternUnits="userSpaceOnUse">'
      + '<path d="M0 4 L180 4" stroke="#7D3C98" stroke-width="2"/>'
      + '<polygon points="4,4 30,4 17,30" fill="#E84A8A"/><polygon points="34,4 60,4 47,30" fill="#F5B700"/><polygon points="64,4 90,4 77,30" fill="#2EAADC"/>'
      + '<polygon points="94,4 120,4 107,30" fill="#7AC74F"/><polygon points="124,4 150,4 137,30" fill="#9B59B6"/><polygon points="154,4 180,4 167,30" fill="#FF7F50"/>'
      + '<circle cx="12" cy="46" r="3" fill="#F5B700"/><rect x="40" y="40" width="7" height="7" transform="rotate(25 43 43)" fill="#2EAADC"/><circle cx="70" cy="54" r="2.5" fill="#E84A8A"/>'
      + '<path d="M96 46 q4 -6 8 0 q4 6 8 0" fill="none" stroke="#7AC74F" stroke-width="2.4"/><circle cx="132" cy="52" r="3" fill="#9B59B6"/><rect x="156" y="42" width="6" height="6" transform="rotate(40 159 45)" fill="#FF7F50"/>'
      + '</pattern></defs><rect width="100%" height="64" fill="url(#pt-bday)"/></svg>',
    corner: '<svg viewBox="0 0 170 130" width="170" height="130" aria-hidden="true">'
      + '<path d="M44 60 Q50 90 70 126" fill="none" stroke="#999" stroke-width="1.2"/><path d="M82 52 Q78 90 72 126" fill="none" stroke="#999" stroke-width="1.2"/><path d="M118 62 Q100 92 74 126" fill="none" stroke="#999" stroke-width="1.2"/>'
      + '<ellipse cx="44" cy="40" rx="22" ry="26" fill="#E84A8A"/><path d="M40 66 l4 -6 l4 6 Z" fill="#E84A8A"/><ellipse cx="37" cy="30" rx="5" ry="8" fill="#fff" opacity=".45"/>'
      + '<ellipse cx="82" cy="30" rx="22" ry="26" fill="#F5B700"/><path d="M78 56 l4 -6 l4 6 Z" fill="#F5B700"/><ellipse cx="75" cy="20" rx="5" ry="8" fill="#fff" opacity=".45"/>'
      + '<ellipse cx="120" cy="42" rx="22" ry="26" fill="#2EAADC"/><path d="M116 68 l4 -6 l4 6 Z" fill="#2EAADC"/><ellipse cx="113" cy="32" rx="5" ry="8" fill="#fff" opacity=".45"/>'
      + '<circle cx="150" cy="96" r="4" fill="#7AC74F"/><circle cx="16" cy="100" r="3.5" fill="#9B59B6"/><rect x="140" y="12" width="7" height="7" transform="rotate(30 143 15)" fill="#FF7F50"/></svg>'
  },
  Islamic: {
    bg: '#F3FAF6', accent: '#1F7A5C',
    top: '<svg width="100%" height="70" aria-hidden="true"><defs><pattern id="pt-isl" width="150" height="70" patternUnits="userSpaceOnUse">'
      + '<line x1="40" y1="0" x2="40" y2="16" stroke="#C9A227" stroke-width="1.5"/>'
      + '<path d="M32 16 L48 16 L44 22 L36 22 Z" fill="#C9A227"/>'
      + '<path d="M33 22 L47 22 L50 44 L30 44 Z" fill="#1F7A5C" stroke="#C9A227" stroke-width="1.5"/>'
      + '<path d="M37 42 L37 31 Q40 25 43 31 L43 42 Z" fill="#F5D76E"/>'
      + '<path d="M30 44 L50 44 L40 54 Z" fill="#C9A227"/><line x1="40" y1="54" x2="40" y2="62" stroke="#C9A227" stroke-width="1.5"/><circle cx="40" cy="64" r="2.4" fill="#C9A227"/>'
      + '<path d="M112 14 a9 9 0 1 0 8 13 a7 7 0 1 1 -8 -13 Z" fill="#C9A227"/>'
      + '<path d="M128 10 l1.6 3.6 l3.8 .4 l-2.9 2.6 l.8 3.8 l-3.3 -2 l-3.3 2 l.8 -3.8 l-2.9 -2.6 l3.8 -.4 Z" fill="#C9A227"/>'
      + '<circle cx="92" cy="32" r="1.8" fill="#C9A227"/><circle cx="140" cy="38" r="1.6" fill="#1F7A5C"/>'
      + '</pattern></defs><rect width="100%" height="3" fill="#C9A227"/><rect width="100%" height="70" fill="url(#pt-isl)"/></svg>',
    corner: '<svg viewBox="0 0 170 120" width="170" height="120" aria-hidden="true">'
      + '<path d="M20 118 L20 74 Q20 48 50 36 Q80 48 80 74 L80 118 Z" fill="#1F7A5C"/>'
      + '<path d="M50 36 L50 22" stroke="#C9A227" stroke-width="2"/><path d="M46 20 a5 5 0 1 0 6 -6 a4 4 0 1 1 -6 6 Z" fill="#C9A227"/>'
      + '<path d="M40 118 L40 90 Q50 78 60 90 L60 118 Z" fill="#F5D76E"/>'
      + '<rect x="88" y="54" width="12" height="64" fill="#1F7A5C"/><path d="M86 54 L94 38 L102 54 Z" fill="#C9A227"/>'
      + '<path d="M140 20 a16 16 0 1 0 14 24 a13 13 0 1 1 -14 -24 Z" fill="#C9A227"/>'
      + '<path d="M150 64 l2 4.5 l5 .5 l-3.8 3.3 l1.1 4.9 l-4.3 -2.6 l-4.3 2.6 l1.1 -4.9 l-3.8 -3.3 l5 -.5 Z" fill="#C9A227"/></svg>'
  },
  Corporate: {
    bg: '#F6F7FB', accent: '#2E3B4E',
    top: '<svg width="100%" height="60" aria-hidden="true"><defs><pattern id="pt-corp" width="160" height="60" patternUnits="userSpaceOnUse">'
      + '<path d="M0 14 Q40 26 80 14 T160 14" fill="none" stroke="#D4AF37" stroke-width="7"/>'
      + '<path d="M0 14 Q40 26 80 14 T160 14" fill="none" stroke="#F3DE9A" stroke-width="2"/>'
      + '<g transform="translate(80 14)"><path d="M0 0 C-14 -14 -26 -6 -18 4 C-12 10 -4 6 0 0 Z" fill="#D4AF37"/><path d="M0 0 C14 -14 26 -6 18 4 C12 10 4 6 0 0 Z" fill="#E8C766"/>'
      + '<path d="M-2 2 L-10 30 L-4 26 L0 32 Z" fill="#D4AF37"/><path d="M2 2 L10 30 L4 26 L0 32 Z" fill="#C9A227"/><circle r="4" fill="#C9A227"/></g>'
      + '<rect x="24" y="34" width="16" height="14" rx="2" fill="#2E3B4E"/><rect x="30" y="34" width="4" height="14" fill="#D4AF37"/>'
      + '<rect x="122" y="36" width="14" height="12" rx="2" fill="#5B6B82"/><rect x="127" y="36" width="4" height="12" fill="#D4AF37"/>'
      + '<circle cx="60" cy="42" r="2.4" fill="#D4AF37"/><circle cx="104" cy="46" r="2" fill="#2E3B4E"/>'
      + '</pattern></defs><rect width="100%" height="8" fill="#2E3B4E"/><rect width="100%" height="60" fill="url(#pt-corp)"/></svg>',
    corner: '<svg viewBox="0 0 170 120" width="170" height="120" aria-hidden="true">'
      + '<rect x="24" y="52" width="86" height="64" rx="4" fill="#2E3B4E"/><rect x="18" y="40" width="98" height="18" rx="3" fill="#3C4C63"/>'
      + '<rect x="60" y="40" width="14" height="76" fill="#D4AF37"/>'
      + '<path d="M67 40 C50 16 30 24 44 38 C50 44 60 42 67 40 Z" fill="#D4AF37"/><path d="M67 40 C84 16 104 24 90 38 C84 44 74 42 67 40 Z" fill="#E8C766"/>'
      + '<g transform="translate(120 58) rotate(14)"><path d="M0 8 L10 0 L40 0 L40 30 L10 30 L0 22 Z" fill="#fff" stroke="#D4AF37" stroke-width="2"/><circle cx="9" cy="15" r="3" fill="#D4AF37"/><line x1="18" y1="11" x2="34" y2="11" stroke="#2E3B4E" stroke-width="2"/><line x1="18" y1="19" x2="30" y2="19" stroke="#2E3B4E" stroke-width="2"/></g>'
      + '<circle cx="140" cy="28" r="4" fill="#D4AF37"/><circle cx="154" cy="40" r="2.5" fill="#2E3B4E"/></svg>'
  }
};

window.FC_MENU_DESIGN={decorations,collections:[{"n": "Wedding", "total": 287, "tag": "Bid boxes, potlis and mithai boxes for every wedding event", "subs": [{"n": "Bid & Favour Boxes", "c": 124}, {"n": "Potlis & Pouches", "c": 94}, {"n": "Mithai Boxes", "c": 24}, {"n": "Jars, Matkis & Cute Extras", "c": 27}, {"n": "Bari, Jora & Trays", "c": 18}], "feat": [{"t": "Velvet Bid Box with Qabool Hai", "p": 395}, {"t": "Acrylic Bid with Wax Seal and Baby Breath", "p": 475}], "photo": {"t": "Velvet Bid Box with Qabool Hai", "img": "https://cdn.shopify.com/s/files/1/0576/8636/0196/files/FINAL-VelvetBidwithQaboolHai10.jpg?v=1753694163"}, "cols": [["By event", [["Nikkah", 27], ["Baat Pakki & Engagement", 16], ["Mehndi", 25], ["Walima & Barat", null], ["Bridal Shower", 1]]]], "quick": {"best": 7, "new": 6, "sale": 2}}, {"n": "Baby", "total": 251, "tag": "Announcement boxes to share your happy news", "subs": [{"n": "It's a Girl", "c": 104}, {"n": "It's a Boy", "c": 92}, {"n": "Twins, Neutral & Baby Shower", "c": 41}, {"n": "First Tooth", "c": 14}], "feat": [{"t": "Train & Bear 3D - Baby Boy Announcement Box", "p": 375}, {"t": "Tin Box with Crochet Design (Imported) - Baby Boy Announcement", "p": 650}], "photo": {"t": "Train & Bear 3D - Baby Boy Announcement Box", "img": "https://cdn.shopify.com/s/files/1/0576/8636/0196/files/FINAL-BearnCar6.jpg?v=1753351437"}, "cols": [["By box style", [["Tin Boxes", 52], ["Acrylic Boxes", 21], ["Hardboard Boxes", 26], ["Drawer & Book Style", 19], ["Cradle & Basket", 6]]]], "quick": {"best": 6, "new": 2, "sale": 2}}, {"n": "Birthday", "total": 255, "tag": "Goody bags, banners and cutouts for kids' parties", "subs": [{"n": "Goody Bags & Boxes", "c": 125}, {"n": "Banners, Backdrops & Standees", "c": 70}, {"n": "Name Cutouts", "c": 35}, {"n": "Caps, Invites & Party Extras", "c": 25}], "feat": [{"t": "Teddy Bear Candy Box", "p": 275}, {"t": "Sonic Theme Goody Box", "p": 450}], "photo": {"t": "Honey Bee Goody Boxes", "img": "https://cdn.shopify.com/s/files/1/0576/8636/0196/files/eZyWatermark_08-07-2019_05-18-22PM_Custom.jpg?v=1701019171"}, "cols": [["By theme", [["Jungle & Safari", 26], ["Unicorn & Rainbow", 14], ["Princess", 11], ["Cars & Vehicles", 8], ["Mermaid & Sea", 16], ["Teddy & Honey Bee", 8]]]], "quick": {"best": 3, "new": 1, "sale": 8}}, {"n": "Islamic", "total": 91, "tag": "Tabarruk, Ramadan, Eid and Ameen giveaways", "subs": [{"n": "Hajj & Umrah Tabarruk", "c": 46}, {"n": "Ramadan & Eid", "c": 19}, {"n": "Ameen & Aqiqah", "c": 15}, {"n": "Tasbeeh, Frames & Giveaways", "c": 11}], "feat": [{"t": "Black Umrah Box with Ribbon & Tag", "p": 385}, {"t": "Black Umrah Tabaruk Box with Ribbon and Top Print", "p": 395}], "photo": {"t": "Black Umrah Box with Ribbon & Tag", "img": "https://cdn.shopify.com/s/files/1/0576/8636/0196/files/FINAL-Blackhardboard1.jpg?v=1750061912"}, "cols": [["Popular picks", [["Umrah Tabarruk Bags", 9], ["Hajj Boxes", 10], ["Date Boxes", 7], ["Zam Zam Bottles", 3], ["Takmeel-e-Quran Boxes", 10]]]], "quick": {"best": 6, "new": 0, "sale": 2}}, {"n": "Corporate", "total": 52, "tag": "Logo gifts, special days and plain boxes in bulk", "subs": [{"n": "Branded & Logo Gifts", "c": 12}, {"n": "Graduation & Special Days", "c": 12}, {"n": "Plain Boxes & Trays", "c": 28}], "feat": [{"t": "Red Ribbon Graduation Box", "p": 490}, {"t": "Plain Acrylic Box with Lock", "p": 0}], "photo": {"t": "Red Ribbon Graduation Box", "img": "https://cdn.shopify.com/s/files/1/0576/8636/0196/files/redribbonbox1.jpg?v=1726481388"}, "cols": [["Order your way", [["Logo printing on boxes", null], ["Bulk price list", null], ["Get a quote on WhatsApp", null]]]], "quick": {"best": 0, "new": 1, "sale": 1}}],symbols:"<symbol id=\"c-Wedding\" viewBox=\"0 0 24 24\"><circle cx=\"9\" cy=\"14\" r=\"5\"/><circle cx=\"15\" cy=\"14\" r=\"5\"/><path d=\"m10 5 2-2 2 2-2 2Z\"/></symbol><symbol id=\"c-Baby\" viewBox=\"0 0 24 24\"><path d=\"M4 11a8 8 0 0 0 16 0Z\"/><path d=\"M12 11V3a8 8 0 0 1 8 8\"/><circle cx=\"8\" cy=\"20\" r=\"1.5\"/><circle cx=\"16\" cy=\"20\" r=\"1.5\"/></symbol><symbol id=\"c-Birthday\" viewBox=\"0 0 24 24\"><path d=\"M4 21h16\"/><path d=\"M5 21v-7h14v7\"/><path d=\"M5 17c2.3 1.4 4.7 1.4 7 0s4.7-1.4 7 0\"/><path d=\"M12 14v-3\"/><path d=\"M12 8.5c-1 0-1.5-.8-1.5-1.5S12 4 12 4s1.5 2.3 1.5 3-.5 1.5-1.5 1.5Z\"/></symbol><symbol id=\"c-Islamic\" viewBox=\"0 0 24 24\"><path d=\"M19 15.5A8 8 0 1 1 12.5 4a6.3 6.3 0 0 0 6.5 11.5Z\"/><path d=\"m18 5 .7 1.5 1.6.2-1.2 1.1.3 1.6-1.4-.8-1.4.8.3-1.6-1.2-1.1 1.6-.2Z\"/></symbol><symbol id=\"c-Corporate\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"8\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2\"/><path d=\"M3 13h18\"/></symbol><symbol id=\"c-Custom\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"9\" width=\"16\" height=\"11\" rx=\"1.5\"/><path d=\"M3 9h18\"/><path d=\"M12 9v11\"/><path d=\"M12 9c-2-3-6-4-6-1.5S10 9 12 9Zm0 0c2-3 6-4 6-1.5S14 9 12 9Z\"/></symbol>"};
})();

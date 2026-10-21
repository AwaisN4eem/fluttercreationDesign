# Flutter Creations

Static storefront based on the supplied desktop and mobile HTML designs. No dependencies or database required.

## Local preview
Run `npm run dev` and open http://127.0.0.1:3000 .

## Deploy to Vercel
Import this folder into a Git repository, then import that repository in Vercel. Set the root directory to `flutter-creations` if importing its parent folder. Framework preset: Other. Build command: `npm run build`. Output directory: `dist`. The included vercel.json configures these settings. No environment variables are needed.

Alternatively, build with `npm run build` and deploy the generated dist folder as a static site.

## Included
- Flutter Creations logo on every header, footer and mobile menu: transparent and white-backed variants in `assets/brand/`. Butterfly-only favicons, Apple touch icon and web app manifest. Preparation details and original source are preserved in `assets/brand/README.md`.
- Responsive homepage retaining reference illustrations and hero slides, with mobile category circles and bottom navigation.
- Design C editorial styling from the supplied three-style HTML: numbered custom-order rows, fine dividers, dark/gold buttons and framed purple bulk-quote panel.
- Functional bulk quantity stepper and presets (25 through 1000+ pieces) update the WhatsApp enquiry link. Prices are confirmed by the business.
- Removed homepage trust cards and footer payment/courier badge strips across devices.
- Card-led category mega menus with a compact desktop header, one primary navigation bar, occasion icons and themed decorative borders. Dropdown card heights adapt to available screen space and refit on browser resize/zoom. By Type, By Occasion and By Material tabs open aligned photo-card collections inside each main category. Keyboard tab navigation and Escape dismissal are supported. Mobile uses matching two-column image cards under By Type and By Occasion.
- Hero slides advance every 5 seconds and respect pause controls and reduced-motion preferences. The extra desktop shopping-path strip and header WhatsApp button have been removed; the floating WhatsApp contact remains. Menu photographs are optimized local WebP files in assets/menu for fast, reliable loading.
- Prominent mobile menu: search, Shop All Products, a lavender Find What You Love group for By Type / Material, occasion submenus, discovery links, and a sticky gold Custom Order action. All mobile dropdowns share one accordion: opening any section closes the previous section, with rotating chevrons and keyboard support. Mobile homepage includes Shop Your Way shortcuts directly below the hero.
- Collections grouped by occasion, purpose, material and need. Checkbox filters use OR within a group and AND between groups; filters and sorting persist in shareable URLs.
- Compact category pages align the smaller heading and product area beside left-side desktop filters. The mobile filter drawer opens from the left. Product Type, Material, Options, Price and Search sections start collapsed with +/− controls and active-selection counts; Occasion is selected through navigation. Clearing filters preserves the current category or curated collection. Price filtering uses minimum and maximum Pakistani rupees (PKR) per piece; values persist in the URL.
- Search, price sorting, empty states, product detail galleries and personalisation fields.
- Animated floating WhatsApp button at the bottom right on every page and device; positioned above mobile bottom navigation, hidden behind open dialogs, and respects reduced-motion preferences.
- Shopping bag stored locally in the visitor's browser, quantity editing, removal and enquiry summary.
- WhatsApp enquiry handoff; visitors review and send the message themselves.

## Before accepting real orders
This is a frontend storefront, not an operational WooCommerce backend. It does not collect payment, reserve stock, save orders to a server or integrate couriers. Prices and 30 products were supplied in the reference HTML; zero-price items are quote-only. Minimum quantities, discounts, delivery estimates and final quotes are confirmed by the business rather than invented.

New Arrivals and Best Sellers are editable presentation collections defined in `curatedCollections` in store.js; they are not calculated from a live release-date or sales feed. Replace these selections with verified catalogue/sales data when connecting WooCommerce.

Product material, purpose and occasion tags are initial classifications inferred from the reference names and should be verified by the business. Edit catalog.js and the enrichment rules at the top of store.js to correct them. Some unnamed box materials default to Cardboard; verify before launch. Images are still loaded from the reference's Shopify CDN and fonts from Google Fonts; use business-owned local assets for independence. WhatsApp and email details come from the supplied HTML and should also be verified. No reviews or street address have been fabricated.

The entry point index.html serves the desktop/tablet design and selects mobile.html on phone screens, preserving the separately supplied mobile composition. Both share the same catalog and store behaviour. Package Prism and its hosting have not been modified.

## Later WordPress migration
Use these templates and CSS as the theme foundation, replace catalog.js with WooCommerce product data, and connect cart/checkout to WooCommerce. Hosting on Vercel does not itself create a WordPress installation.

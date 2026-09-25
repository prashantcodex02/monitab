# MoniTab v3.1

Production-grade Next.js App Router rebuild focused on organic search, useful calculators, country hubs, editorial guides, research, dark/light mode, mobile UX and responsible AdSense placement.

## Run
1. `npm install`
2. `npm run typecheck`
3. `npm run build`
4. `npm run start`

## Before launch
- Replace the placeholder AdSense line in `public/ads.txt` with your approved publisher ID.
- Add your actual AdSense script only after approval.
- Replace contact/privacy text with your final legal copy.
- Audit every financial formula and jurisdiction-specific assumption.
- Add Google Search Console verification and submit `/sitemap.xml`.
- Connect analytics/consent tooling appropriate to your jurisdiction.

## SEO model
- 65 core calculator URLs
- 22 high-intent scenario calculator URLs
- 12 guide URLs
- 6 research URLs
- 4 country hubs
- Dynamic sitemap + robots
- Canonicals + metadata + Open Graph
- JSON-LD WebSite, Organization, WebApplication and Article markup
- Cross-linking between calculators and guides
- Search UI is noindex/disallowed to prevent thin internal-search pages entering the index.

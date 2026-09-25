# MoniTab v3.1 SEO + Launch Plan

## Architecture
- 65 core calculator URLs
- 22 high-intent scenario URLs
- 12 long-form guide URLs
- 6 original research URLs
- 4 country hubs
- Dynamic sitemap and robots
- Canonical URLs and page-specific metadata
- Open Graph metadata
- JSON-LD for WebSite, Organization, WebApplication and Article
- Internal links from calculators -> related calculators and guides
- Internal links from guides -> relevant calculators
- Search page marked noindex

## Programmatic SEO rule
Do not mass-generate pages just by swapping a number into a template. Add a scenario page only when it answers a real query and contains useful explanation, assumptions, related tools and a reproducible calculation.

## Keyword system
`app/data/keyword-map.json` is the seed keyword registry. Extend each record with:
- primary keyword
- secondary queries
- search intent
- country
- priority
- source URL(s)
- last reviewed date
- content owner
- status

## Content system
Each guide should contain:
1. Clear answer near the top
2. Original explanation
3. Calculator CTA
4. Assumptions and limitations
5. Current-source references for changing facts
6. Related tools
7. Related guides
8. Last reviewed date
9. Author/reviewer information where appropriate

## AdSense
Ad placeholders are included, but no publisher ID is hard-coded. After approval:
- replace `public/ads.txt` with the exact line supplied by Google
- add the official AdSense script
- test responsive placements
- keep ads visually distinct from navigation and controls
- do not place ads on thin/non-content pages
- never encourage clicks or impressions

## Pre-launch checklist
- [ ] Audit every calculator formula
- [ ] Verify tax-year and country-specific rules
- [ ] Add official sources and review dates
- [ ] Replace privacy/contact placeholders
- [ ] Configure cookie/consent solution where required
- [ ] Configure Search Console
- [ ] Submit sitemap
- [ ] Run PageSpeed Insights on home, calculator, guide and country pages
- [ ] Test mobile navigation and search
- [ ] Test dark/light mode
- [ ] Test print/share/copy interactions
- [ ] Test 404 behavior
- [ ] Test canonical URLs
- [ ] Validate structured data
- [ ] Add real AdSense publisher ID only after approval

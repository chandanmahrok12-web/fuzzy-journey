# UNPLUG LABS — SEO / GEO / AEO Checklist

Prepared 2026-10-14. Re-check official platform guidance before major changes.

## Technical foundations

- [ ] Confirm which Vercel project actually serves the intended public hostname.
- [ ] Check host, HTTPS, redirects and trailing-slash behavior in a live browser.
- [ ] Run `npm run validate`; treat it as a source-level gate only.
- [ ] Crawl the live site for status codes, broken links, indexability, titles, descriptions, H1s, canonicals, assets and duplicates.
- [ ] Confirm important pages render useful content without login.
- [ ] Verify `/robots.txt` and `/sitemap.xml` are publicly accessible and valid.
- [ ] Ensure the sitemap contains only preferred canonical, indexable URLs.
- [ ] Verify the production 404 response code; a 404-looking page alone does not prove its HTTP status.
- [ ] Test responsive layout, keyboard navigation, menu controls, reduced motion and real interactions.
- [ ] Measure performance with PageSpeed Insights/Lighthouse and field data where available.

## Google Search Console

- [ ] Sign in with a Google account that owns or has the right property permissions.
- [ ] Select or add the exact URL-prefix/domain property.
- [ ] Complete Google's supported verification method and confirm property access.
- [ ] Submit `https://unplugworld.vercel.app/sitemap.xml` only after the intended host is live and the sitemap is reachable.
- [ ] Review sitemap parsing, indexing, security issues, manual actions, and key URL inspections.
- [ ] Request indexing selectively after meaningful changes; submissions do not guarantee indexing.
- [ ] Record clicks, impressions, CTR, queries, pages and available experience metrics.
- [ ] Annotate migrations and major deployments.

This source code does not verify or provision a Search Console property. Google account access is an external account-level action.

## Bing and related discovery

- [ ] Verify the site in Bing Webmaster Tools where authorized.
- [ ] Submit the public sitemap and review crawl/index diagnostics.
- [ ] Configure IndexNow only after creating a key, publishing the expected root key file, and confirming it is reachable.

## GEO / AEO / entity clarity

- [ ] Define UNPLUG LABS and products consistently, with OFFLINE_OS remaining distinct.
- [ ] Make useful answers and product facts visible in the page content.
- [ ] Prefer original, experience-based work over templated content volume.
- [ ] Attribute claims and describe methods and limitations for original experiments.
- [ ] Validate JSON-LD and ensure it matches visible, verified content.
- [ ] Check official crawler documentation before changing access.
- [ ] Separate OpenAI OAI-SearchBot (search discovery), GPTBot (potential model-training crawl), and ChatGPT-User (user-initiated retrieval). Choose training-crawler policy deliberately before making an explicit allow/disallow rule.
- [ ] Do not treat llms.txt, extra schema, special formatting or FAQ volume as guaranteed ranking/citation techniques.
- [ ] Measure AI citations and referrals as observed samples with query, platform, date, URL and methodology. Do not invent private ranking metrics or promise inclusion.

## Privacy / claims

- [ ] Confirm Reality Kit completion state stays local in the browser.
- [ ] Update the privacy notice before adding analytics, forms, embeds, ads or data processing.
- [ ] Publish OFFLINE_OS compatibility, permissions, release details, download link and integrity information only after verifying the actual build.
- [ ] Do not invent testimonials, ratings, downloads, staff, awards, partnerships or product capabilities.

## Migration and change safety

- [ ] Back up the current live source and inventory every legacy URL before migrating.
- [ ] Use route-level redirects to genuine equivalents, not blanket homepage redirects.
- [ ] Preview-test before production release; record commits and test results.
- [ ] Do not change DNS, domains, access controls, live redirects or bot-training preferences without checking ownership, intent and authorization.

## Official references

- Google Search Central: https://developers.google.com/search/docs
- Google generative AI search: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google canonicalization: https://developers.google.com/search/docs/crawling-indexing/canonicalization
- Structured-data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- OpenAI crawler documentation: https://developers.openai.com/api/docs/bots
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- Schema.org: https://schema.org/
- PageSpeed Insights: https://pagespeed.web.dev/

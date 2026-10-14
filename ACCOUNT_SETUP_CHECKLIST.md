# Account Setup Handoff

## GitHub

Source is committed to `chandanmahrok12-web/fuzzy-journey` on `main`.

## Vercel

1. Verify which Vercel project owns the intended production host.
2. Connect this GitHub repository in the correct workspace.
3. Use repository root as project root. This is a dependency-free static site; `npm run validate` is the source check.
4. Deploy a preview and test routes, responsive layout, links, local interactions, headers, robots.txt and sitemap.
5. Do not attach or redirect `unplugworld.vercel.app` until its current owner/project and intended routing are verified.
6. After deployment, ensure canonical URLs and sitemap match the real production host.

## Google Search Console

1. Verify the correct property with the Google account that controls the site.
2. Confirm the canonical host is live and the sitemap is reachable.
3. Submit the sitemap after successful verification and host validation.
4. Check sitemap status and inspect the homepage plus important product pages.

## Completion criteria

- Repository commit exists.
- Correct Vercel project is linked.
- Preview passes route, mobile, interaction and technical checks.
- Production hostname assignment and deployment are confirmed.
- Search Console property is verified and sitemap submission confirmed.
- Legacy redirects are mapped and tested at route level.

# UNPLUG LABS — Legacy Consolidation Plan

## Intended destination

The project plan proposes https://unplugworld.vercel.app/ as the consolidated public host. Verify that the intended Vercel project actually owns and serves this hostname before production changes.

## Provisional homepage mapping

| Legacy homepage | Proposed destination |
|---|---|
| https://unpluglabsdrop-delta.vercel.app/ | https://unplugworld.vercel.app/drops/ |
| https://unpluglabsv1free.vercel.app/ | https://unplugworld.vercel.app/tools/reality-kit/ |
| https://unpluglabs.vercel.app/ | https://unplugworld.vercel.app/ |
| https://unplug-labs-field-manuscript.vercel.app/ | https://unplugworld.vercel.app/field-manuscript/ |

This is only a starting point. Do not implement blanket host redirects based on root mappings alone.

## Migration procedure

1. Inventory every legacy public route, important asset, and unique content item.
2. Review Search Console data, external references, referral traffic and indexed URLs where access permits.
3. Choose the closest equivalent destination for each moved route; preserve useful unique content.
4. Verify destination status codes, content and interactivity.
5. Create a complete URL-by-URL redirect map. Avoid loops, chains, irrelevant redirects and destinations that are not genuine replacements.
6. Update internal links, canonicals, sitemaps, social links and cross-references.
7. Test response codes and final destinations.
8. Apply redirects only in the Vercel project that owns each source host, with permission.
9. Monitor old and new Search Console properties where accessible; record launch date, commit and issues.
10. Preserve rollback instructions.

## Repository boundary

This repository contains the unified static-site baseline. It does not itself change existing Vercel projects, domains, DNS, Search Console properties or legacy redirects.

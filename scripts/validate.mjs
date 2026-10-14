import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';

const root = process.cwd();
const errors = [];
const canonicalOrigin = 'https://unplugworld.vercel.app';
const required = [
  'README.md','index.html','404.html','robots.txt','sitemap.xml','vercel.json','package.json',
  'assets/site.css','assets/site.js','assets/favicon.svg','assets/og-card.svg','site.webmanifest',
  'what-is-unplug/index.html','tools/reality-kit/index.html','tools/dopamine-menu/index.html',
  'drops/index.html','field-manuscript/index.html','offline-os/index.html','links/index.html','privacy/index.html'
];
for (const file of required) {
  if (!existsSync(resolve(root, file))) errors.push('Missing required file: ' + file);
}
function walk(directory) {
  let result = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolute = resolve(directory, entry.name);
    if (entry.isDirectory()) result = result.concat(walk(absolute));
    else result.push(absolute);
  }
  return result;
}
const htmlFiles = walk(root).filter(path => path.endsWith('.html'));
for (const absolute of htmlFiles) {
  const file = relative(root, absolute).split(sep).join('/');
  const source = readFileSync(absolute, 'utf8');
  if (!/<title>[^<]+<\/title>/i.test(source)) errors.push(file + ': missing title');
  if (file !== '404.html' && !/<meta\s+name="description"\s+content="[^"]+"/i.test(source)) errors.push(file + ': missing meta description');
  if (!/<h1\b/i.test(source)) errors.push(file + ': missing H1');
  if (!/<html\b[^>]*lang="en"/i.test(source)) errors.push(file + ': missing HTML language');
  if (file === '404.html') {
    if (!/<meta\s+name="robots"\s+content="noindex/i.test(source)) errors.push('404.html should be noindex');
  } else {
    const match = source.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    if (!match) errors.push(file + ': missing canonical URL');
    else if (!match[1].startsWith(canonicalOrigin + '/')) errors.push(file + ': canonical uses an unexpected host: ' + match[1]);
  }
  for (const script of source.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(script[1]); }
    catch (error) { errors.push(file + ': invalid JSON-LD (' + error.message + ')'); }
  }
  for (const match of source.matchAll(/\b(?:href|src)="(\/[a-zA-Z0-9_~!$&'()*+,;=:@%./?#-]*)"/g)) {
    const raw = match[1];
    if (raw.startsWith('//')) continue;
    const pathname = raw.split(/[?#]/, 1)[0];
    let target = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
    if (target.endsWith('/')) target += 'index.html';
    if (!existsSync(resolve(root, target))) errors.push(file + ': local target not found: ' + raw);
  }
}
const robots = existsSync(resolve(root, 'robots.txt')) ? readFileSync(resolve(root, 'robots.txt'), 'utf8') : '';
if (!robots.includes('Sitemap: ' + canonicalOrigin + '/sitemap.xml')) errors.push('robots.txt must reference the canonical sitemap URL');
const sitemap = existsSync(resolve(root, 'sitemap.xml')) ? readFileSync(resolve(root, 'sitemap.xml'), 'utf8') : '';
if (!sitemap.includes('<urlset') || !sitemap.includes('</urlset>')) errors.push('sitemap.xml does not look like a URL set');
if (!sitemap.includes(canonicalOrigin + '/')) errors.push('sitemap.xml has no canonical-host URL');
const listed = [...sitemap.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
if (!listed.length) errors.push('sitemap.xml has no loc entries');
for (const url of listed) {
  if (!url.startsWith(canonicalOrigin + '/')) errors.push('Sitemap URL uses unexpected host: ' + url);
  let path = new URL(url).pathname;
  if (path === '/') path = '/index.html';
  else if (path.endsWith('/')) path += 'index.html';
  if (!existsSync(resolve(root, path.replace(/^\//, '')))) errors.push('Sitemap URL has no matching page: ' + url);
}
if (errors.length) {
  console.error('Validation failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('PASS: ' + htmlFiles.length + ' HTML documents; required routes/assets, titles, descriptions, canonical host, JSON-LD syntax, sitemap routes, robots sitemap reference, language attributes and root-relative links checked.');
console.log('This source-level check does not prove live deployment, browser rendering, indexing, rich-result eligibility, or Core Web Vitals.');

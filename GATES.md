# Gates: SEO search identity

OWNS: index.html, package.json, scripts/prerender.mjs, scripts/sync-seo.mjs, public/robots.txt, public/sitemap.xml, src/data/site.js, src/data/portfolio.js, src/pages/HomePage.jsx, src/sections/Footer.jsx, src/components/ProjectCard.jsx

Scope: Deliver crawlable, consistent search identity for Jonnalagadda Nagasai without visual or stylesheet changes.

- [x] G1: build output has exactly one H1 and crawlable name and bio content
  CHECK: npm.cmd run build && node -e "const fs=require('fs');const html=fs.readFileSync('dist/index.html','utf8');if((html.match(/<h1[ >]/g)||[]).length!==1||!html.includes('Jonnalagadda Nagasai')||!html.includes('also known as Nagasai Chowdary'))throw Error('missing crawlable identity');console.log('crawlable identity verified')"
  EXPECT: crawlable identity verified
  EVIDENCE: automatic-evidence=v1; definition-sha256=674ea60279f84e3d828e5e70224f302a32560c26225c6fe0c7d9ad36eeab276e; exit=0; EXPECT=matched; output-sha256=61550adcf32875a0b5d794cb1a3ab26c477603e6c69d2e5079aab32bbf7fc84f; output-bytes=2227; shell=C:\Windows\System32\cmd.exe; cwd=C:\Users\asus\Desktop\portfolio; path=026a25e7809c/44 entries

- [x] G2: generated head has the required canonical, robots, social, and JSON-LD identity data
  CHECK: node scripts/sync-seo.mjs && node -e "const fs=require('fs');const html=fs.readFileSync('index.html','utf8');const needed=['Jonnalagadda Nagasai | AI Engineer & Founder, Rudrova Labs','index, follow, max-image-preview:large','profile:first_name','twitter:card','ProfilePage','Rudrova Labs Consultancy Services','Nagasai Chowdary'];if(!needed.every(x=>html.includes(x))||html.includes('keywords'))throw Error('missing or invalid head data');console.log('head identity verified')"
  EXPECT: head identity verified
  EVIDENCE: automatic-evidence=v1; definition-sha256=6969ad63972134dfbe101cb3a353060c4fdfa0e89d375a5956fcd42b04bdef39; exit=0; EXPECT=matched; output-sha256=6a7f36cf44bc42cf73ec2419d393e86bee6be5d65c9e5ade65e7abe7f47f003b; output-bytes=45; shell=C:\Windows\System32\cmd.exe; cwd=C:\Users\asus\Desktop\portfolio; path=026a25e7809c/44 entries

- [x] G3: static SEO controls and visible identity meet the requested restrictions
  CHECK: node -e "const fs=require('fs');const site=fs.readFileSync('src/data/site.js','utf8');const source=['src/data/portfolio.js','src/pages/HomePage.jsx','src/sections/Footer.jsx','src/components/ProjectCard.jsx'].map(x=>fs.readFileSync(x,'utf8')).join('\\n');const robots=fs.readFileSync('public/robots.txt','utf8');const map=fs.readFileSync('public/sitemap.xml','utf8');if(!site.includes('Jonnalagadda Nagasai')||/Jonnalagadda Nagasai Chowdary|Naagsai|Naga Sai/.test(source)||!source.includes('also known as Nagasai Chowdary')||!robots.includes('Sitemap:')||!map.includes('<lastmod>2026-11-28</lastmod>'))throw Error('identity controls invalid');console.log('identity controls verified')"
  EXPECT: identity controls verified
  EVIDENCE: automatic-evidence=v1; definition-sha256=d8d505c04e7412184c65e9d0bb7c15da8e548a075292e5d854a6718bb5c3c295; exit=0; EXPECT=matched; output-sha256=bd80a80b6e884b1f34aaf092f1f8a94894fc145ca0c8623c6f8c0425e9ed9c3e; output-bytes=27; shell=C:\Windows\System32\cmd.exe; cwd=C:\Users\asus\Desktop\portfolio; path=026a25e7809c/44 entries

- [x] G4: no CSS or layout stylesheet is modified for this SEO-only change
  CHECK: node -e "const {execFileSync}=require('child_process');const changed=execFileSync('git',['diff','--name-only','HEAD'],{encoding:'utf8'});if(changed.includes('.css'))throw Error('stylesheet modified');console.log('no stylesheet changes verified')"
  EXPECT: no stylesheet changes verified
  EVIDENCE: automatic-evidence=v1; definition-sha256=91d562ac02a5dd053d531353198de3d3c90d527b19faa60836038ff349a4baf7; exit=0; EXPECT=matched; output-sha256=eb4d8bf878e3c5d4867dba1b8965efed9d32aafde4e0bf94b56b7348afe8f21f; output-bytes=579; shell=C:\Windows\System32\cmd.exe; cwd=C:\Users\asus\Desktop\portfolio; path=026a25e7809c/44 entries

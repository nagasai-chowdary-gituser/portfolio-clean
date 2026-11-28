import { readFile, writeFile } from "node:fs/promises";
import { site } from "../src/data/site.js";

const title = "Jonnalagadda Nagasai | AI Engineer & Founder, Rudrova Labs";
const description = "Jonnalagadda Nagasai (Nagasai Chowdary) is an AI engineer and AI product developer in Chennai, India, and founder of Rudrova Labs. Builds AI agents, voice agents and SaaS.";
const personId = `${site.url}#person`;
const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.publicName,
    alternateName: site.alternateNames,
    url: site.url,
    image: site.image,
    jobTitle: "Founder and Managing Director",
    description,
    worksFor: { "@type": "Organization", name: site.agency, alternateName: site.agencyAbbreviation, url: site.agencyUrl },
    alumniOf: { "@type": "CollegeOrUniversity", name: site.education },
    address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
    knowsAbout: ["Artificial Intelligence", "AI Agents", "Voice Agents", "LLMs", "SaaS Development"],
    sameAs: [site.linkedin, site.eChai, site.agencyUrl, site.agencyFounderUrl, site.instagram, site.github],
};
const website = { "@context": "https://schema.org", "@type": "WebSite", name: site.publicName, url: site.url };
const profilePage = { "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@id": personId }, url: site.url };
const markup = `<!-- SEO:START -->
  <meta name="author" content="${site.publicName}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="google-site-verification" content="" />
  <link rel="canonical" href="${site.url}" />
  <meta name="description" content="${description}" />
  <meta property="og:type" content="profile" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${site.url}" />
  <meta property="og:image" content="${site.image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="profile:first_name" content="Jonnalagadda" />
  <meta property="profile:last_name" content="Nagasai" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${site.image}" />
  <title>${title}</title>
  <script type="application/ld+json">${JSON.stringify(person)}</script>
  <script type="application/ld+json">${JSON.stringify(website)}</script>
  <script type="application/ld+json">${JSON.stringify(profilePage)}</script>
  <!-- SEO:END -->`;

const path = new URL("../index.html", import.meta.url);
const document = await readFile(path, "utf8");
if (!document.includes("<!-- SEO:START -->")) throw new Error("SEO marker was not found in index.html.");
await writeFile(path, document.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, markup));
console.log("SEO head synchronized");

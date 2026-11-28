import { readFile, writeFile } from "node:fs/promises";
import { site } from "../src/data/site.js";

const outputPath = new URL("../dist/index.html", import.meta.url);
const document = await readFile(outputPath, "utf8");

const staticMarkup = `
  <header>
    <nav aria-label="Primary navigation">
      <a href="/">${site.publicName}</a>
      <a href="/about">About</a><a href="/projects">Projects</a><a href="/tech">Skills</a><a href="/contact">Contact</a>
    </nav>
  </header>
  <main>
    <section aria-labelledby="portfolio-title">
      <h1 id="portfolio-title">${site.publicName}</h1>
      <p>AI Engineer, AI Product Developer, and Founder and Managing Director of ${site.agency} (${site.agencyAbbreviation}).</p>
      <p>${site.publicName}, also known as ${site.knownAs}, is an AI engineer and AI product developer in Chennai, India who builds AI agents, voice agents, and SaaS products.</p>
      <p><a rel="me noopener noreferrer" href="${site.linkedin}">${site.publicName} on LinkedIn</a> · <a rel="me noopener noreferrer" href="${site.eChai}">eChai Ventures founder profile</a> · <a rel="me noopener noreferrer" href="${site.github}">${site.publicName} on GitHub</a> · <a rel="me noopener noreferrer" href="${site.agencyUrl}">${site.agency} (${site.agencyAbbreviation})</a></p>
    </section>
    <section><h2>About</h2><p>${site.publicName} works on applied artificial intelligence, LLM systems, AI agents, voice agents, and SaaS development.</p></section>
    <section><h2>Experience</h2><p>Founder and Managing Director of ${site.agency} (${site.agencyAbbreviation}) and an eChai Ventures founder.</p></section>
    <section><h2>Projects</h2><p>${site.agency} (${site.agencyAbbreviation}), RudrxAI Lead Scrapper and Lead Manager, AI phone agent, Bhoomi Putra AI, and DocuVerify are part of ${site.knownAs}'s product work.</p></section>
    <section><h2>Skills</h2><p>Artificial Intelligence, LLMs, AI Agents, Voice Agents, Python, React, FastAPI, SaaS development, and system design.</p></section>
    <section><h2>Contact</h2><p>Contact ${site.publicName} for AI engineering, AI product development, and ${site.agency} (${site.agencyAbbreviation}) projects.</p></section>
  </main>
  <footer><a rel="me noopener noreferrer" href="${site.agencyFounderUrl}">${site.publicName} at ${site.agency} (${site.agencyAbbreviation})</a></footer>`;

const result = document.replace('<div id="root"></div>', `<div id="root">${staticMarkup}</div>`);
if (result === document) throw new Error("Prerender root placeholder was not found.");
await writeFile(outputPath, result);
console.log("static SEO prerender completed");

import { readFile, writeFile } from "node:fs/promises";

const outputPath = new URL("../dist/index.html", import.meta.url);
const document = await readFile(outputPath, "utf8");

const staticMarkup = `
  <header>
    <nav aria-label="Primary navigation">
      <a href="/">Jonnalagadda Nagasai Chowdary</a>
      <a href="/about">About</a><a href="/projects">Projects</a><a href="/tech">Skills</a><a href="/contact">Contact</a>
    </nav>
  </header>
  <main>
    <section aria-labelledby="portfolio-title">
      <h1 id="portfolio-title">Jonnalagadda Nagasai Chowdary</h1>
      <p>AI Engineer, AI Product Developer, and Managing Director of Rudrova Labs.</p>
      <p>Jonnalagadda Nagasai Chowdary, known professionally as Nagasai Chowdary, is an AI engineer from Tamil Nadu, India who builds AI agents, voice agents, and SaaS products.</p>
      <p><a rel="me noopener" href="https://www.linkedin.com/in/jonnalagadda-nagasai-2722a6315/">Jonnalagadda Nagasai Chowdary on LinkedIn</a> · <a rel="me noopener" href="https://echai.ventures/founders/jonnalagadda-nagasai">eChai Ventures founder profile</a> · <a rel="me noopener" href="https://github.com/nagasai-chowdary-gituser">Jonnalagadda Nagasai Chowdary on GitHub</a> · <a rel="me noopener" href="https://www.rudrovalabs.tech">Rudrova Labs</a></p>
    </section>
    <section><h2>About</h2><p>Jonnalagadda Nagasai Chowdary works on applied artificial intelligence, LLM systems, AI agents, voice agents, and SaaS development.</p></section>
    <section><h2>Experience</h2><p>Managing Director of Rudrova Labs and an eChai Ventures founder. Researches prompt framing effects in large language model performance.</p></section>
    <section><h2>Projects</h2><p>Rudrova Labs, RudrxAI Lead Scrapper and Lead Manager, AI phone agent, Bhoomi Putra AI, and DocuVerify are part of Nagasai Chowdary's product work.</p></section>
    <section><h2>Skills</h2><p>Artificial Intelligence, LLMs, AI Agents, Voice Agents, Python, React, FastAPI, SaaS development, and system design.</p></section>
    <section><h2>Contact</h2><p>Contact Jonnalagadda Nagasai Chowdary for AI engineering, AI product development, and Rudrova Labs projects.</p></section>
  </main>
  <footer><a rel="me noopener" href="https://www.rudrovalabs.tech/team/jonnalagadda-nagasai-chowdary">Jonnalagadda Nagasai Chowdary at Rudrova Labs</a></footer>`;

const result = document.replace('<div id="root"></div>', `<div id="root">${staticMarkup}</div>`);
if (result === document) throw new Error("Prerender root placeholder was not found.");
await writeFile(outputPath, result);
console.log("static SEO prerender completed");

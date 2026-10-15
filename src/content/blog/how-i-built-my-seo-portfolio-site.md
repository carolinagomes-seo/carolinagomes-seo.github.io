---
title: 'How I built a free SEO portfolio with Astro and GitHub Pages'
seoTitle: 'How I built my SEO portfolio with Astro'
description: 'How I built my SEO portfolio in five days for $0 with Astro and GitHub Pages: 12 steps, the mistakes I fixed and the SEO, schema and GEO setup.'
pubDate: 2026-10-10
category: 'Technical SEO'
image: '../../assets/website-wireframe-sketches-black-and-white.jpg'
imageAlt: 'Black-and-white photo of hand-drawn wireframe sketches for a desktop website layout and two mobile screens, shaded in watercolor on paper'
imageCredit: 'Hal Gatewood on Unsplash'
imageCreditUrl: 'https://unsplash.com/pt-br/fotografias/esbocos-em-aquarela-de-layouts-de-sites-tZc3vjPCk-Q'
---

**I built my SEO portfolio as a static Astro site, hosted for free on GitHub Pages and published automatically with GitHub Actions.** It took five days, from October 6 to 10, 2026, including fixing deploy errors and a rebrand. And the total cost? Zero.

I'm [Ana Carolina Gomes](/about/), an SEO & GEO specialist. I had never used Node.js or a static site generator before this project, and I built it with help from Claude, an AI assistant. This post covers the full process: the steps, the decisions, the mistakes and what I'd do differently. The result is live at [carolinagomes-seo.github.io](/), the site you're reading now.

**Key takeaways**

- A static site gives you full control over technical SEO for free.
- Pick your name and address before you write any code. Every URL change means starting over in Search Console.
- Most of my errors came from file paths, names and one misplaced file, not from code.
- Design for mobile first, with a clear goal for the first screen.
- One clear author entity, repeated in text, schema and LinkedIn, helps search engines and AI tools connect your work to you.

| Project    | At a glance                                                                         |
| :--------- | :---------------------------------------------------------------------------------- |
| **Stack**  | Astro (blog template), Git, GitHub, GitHub Actions, GitHub Pages, VS Code on Windows |
| **Time**   | 5 days (October 6 to 10, 2026)                                                      |
| **Cost**   | $0 (no domain, no paid plan)                                                        |
| **Pages**  | Home, About, Skills, Contact, Case studies, Blog                                    |
| **Status** | Live, sitemap submitted, indexing requested in Google and Bing                      |

## Why did I build a static site instead of using Wix or Webflow?

I chose a static site because it's free, has no ads and gives me full control over the HTML, schema, sitemap and speed. For an SEO portfolio, that control is the point: the site itself is proof of what I can do.

There was a second reason. [Search Engine Land's beginner guide](https://searchengineland.com/guide/what-is-seo) says one of the best ways to learn SEO is to build your own site and test what works. I wanted a place to practice technical SEO and GEO, not just write about them.

Here's how the options compared for my needs:

| Platform                | Cost to start       | Control over technical SEO | Why I didn't choose it                                                     |
| :---------------------- | :------------------ | :------------------------- | :------------------------------------------------------------------------- |
| Wix                     | Free plan available | Limited                    | The free plan shows platform ads and limits what I can change in the code |
| Squarespace             | Paid only           | Limited                    | No free plan                                                               |
| Webflow                 | Free plan available | Good                       | The free plan has page limits and no custom domain                         |
| Google Sites            | Free                | Very limited               | Almost no control over schema, metadata or code                            |
| **Static site (Astro)** | **Free**            | **Full**                   | **Chosen**                                                                 |

The trade-off is real: a static site asks you to learn a few developer tools. If you just need a simple page fast, a website builder is fine. If you want to learn how sites work under the hood, a static site teaches you more.

## Why Astro, and why GitHub Pages instead of Vercel?

I chose Astro because it outputs plain static HTML, and GitHub Pages because a static portfolio doesn't need anything more. The deciding factor for hosting wasn't features. It was keeping a stable address.

**Why Astro.** Astro builds pages as plain HTML, which search engines can read without running JavaScript. It has a built-in sitemap integration and content collections, so I write posts and case studies as Markdown files. I also looked at Hugo and hand-written HTML, but Astro's blog template gave me a working base in minutes.

**Why I dropped Vercel.** Vercel, Netlify and Cloudflare Pages are all good hosts, and Vercel offers extras like preview deploys, redirects and custom headers. But by the time I considered it, my site was already live on GitHub Pages. Moving would have changed the address, and every URL change means a new Search Console property and starting over with indexing. For a small static site, those extras didn't justify the reset.

The lesson: for SEO, the most important thing about hosting is a stable address, not the host itself.

Here are the other key decisions:

| Decision     | What I chose                            | Alternatives                     | Why                                                                                                 |
| :----------- | :-------------------------------------- | :------------------------------- | :-------------------------------------------------------------------------------------------------- |
| Case studies | Markdown collection with a status field | Hard-coded pages                 | New cases are written as text; unfinished ones show as "in progress"                                |
| Font         | Self-hosted Hanken Grotesk, preloaded   | Google Fonts link                | Same look, one less external request, better for Core Web Vitals                                    |
| Brand        | Carolina Gomes, SEO & Brand             | ACmkt and other short names      | ACmkt clashed with existing companies, and the other options were already taken in search results |
| Address      | carolinagomes-seo.github.io             | A custom domain                  | Free, and a domain can be added later without rebuilding                                            |
| Positioning  | Competitive, international markets      | Leading with my current industry | Keeps real results visible without tying the site to one niche                                      |

## What do you need before you start?

You need four free things: Node.js, Git, a GitHub account and a code editor. You don't need to know how to code, but you'll use the terminal a lot.

- **[Node.js](https://nodejs.org/en):** runs Astro on your computer. I installed v24 LTS with the Windows installer and skipped the Docker option the site suggested.
- **[Git](https://git-scm.com/):** tracks your changes and sends them to GitHub.
- **A [GitHub](https://github.com/) account:** hosts your code and, through GitHub Pages, your website. Choose your username carefully, because it becomes part of your site's address.
- **[VS Code](https://code.visualstudio.com/):** a free editor with a built-in terminal.

Before you install anything, decide two things: your brand name and your final address. I learned this the hard way, as you'll see in the mistakes section.

## How do you build and publish an Astro site on GitHub Pages, step by step?

You create an Astro project, push it to a GitHub repository named after your username, and let a GitHub Actions workflow build and publish it on every push. Here are the 12 steps I followed, from choosing a platform to asking Google to index the site. Astro's official [GitHub Pages deploy guide](https://docs.astro.build/en/guides/deploy/github/) covers steps 4 to 7 in more detail.

1. **Choose the platform.** I compared Wix, Squarespace, Webflow and a static site, and picked a static site (see the table above).
2. **Install the tools.** Node.js and Git, plus VS Code.
3. **Create the Astro project with the blog template.** In the terminal, run `npm create astro@latest`, pick the blog template, then run `npm run dev` to preview the site at `localhost:4321`.
4. **Create the GitHub repository.** Name it exactly `username.github.io`, using your real GitHub username. That puts the site at the root address, with no extra folder in the URL.
5. **Set the site URL.** In `astro.config.mjs`, set `site: 'https://username.github.io'`. Astro uses it for canonical URLs and the sitemap.
6. **Add the deploy workflow.** Create `.github/workflows/deploy.yml` with the workflow from Astro's guide. It uses the official Astro action, so every push to the main branch rebuilds and publishes the site.
7. **Push and switch Pages to GitHub Actions.** Make the repository public, then go to Settings, Pages and set the source to GitHub Actions. My first green check came after fixing the workflow and the Node version.
8. **Design the structure.** I planned a header and six main pages: Home (a short intro, real numbers, selected work and contact), About, Skills, Contact, Case studies and Blog. I studied other portfolios and kept a minimal black-and-white style.
9. **Build the case studies as a content collection.** Each case study is one Markdown file with a shared template: challenge, strategy, execution and results. A status field marks unfinished cases as "in progress", so they don't show up as broken pages.
10. **Add technical SEO and GEO.** Connected JSON-LD schema, a share image, a favicon, `robots.txt`, an auto-generated `llms.txt`, a self-hosted font and trailing-slash links. I explain each one below.
11. **Publish the first content.** The [GreenSip case study](/case-studies/greensip-mini-capstone/) and the post [What is SEO? A simple, complete guide for beginners](/blog/what-is-seo/), with an optimized hero image.
12. **Clean up and request indexing.** I removed leftovers from the template, submitted the sitemap in [Google Search Console](https://search.google.com/search-console/about), requested indexing and imported the site into [Bing Webmaster Tools](https://www.bing.com/webmasters/about).

One thing that looked like an error wasn't: right after I submitted the sitemap, Search Console showed "Couldn't fetch". New properties often show this until Google reads the file for the first time.

## How did I design the pages for visitors and search engines?

I redesigned the site page by page, with a simple loop: find the problems, mock up options, pick one, then build it. The first version worked, but it read like a draft.

A screenshot review on desktop and mobile found the main problems:

- **My name was buried** in small gray text, so neither visitors nor search engines saw the main entity first.
- **My strongest result was hidden** halfway down the page, in small text.
- **Tool tags looked like buttons**, because they used the same outline as real links.
- **Contrast was weak and buttons were small**, around 32px tall.
- **The same facts didn't match** across pages, like a metric and a post date.
- **Mobile was a squeezed desktop**, with a full-screen photo pushing all the content below the fold.

Every page then went through the same seven steps:

1. Screenshot the live page on desktop and on a phone-sized screen (390 to 430px wide).
2. List the problems against UX basics: hierarchy, contrast, tap targets, spacing and consistency.
3. Mock up two to four options side by side, with real copy and my real photo.
4. Pick one and refine it with small, specific feedback.
5. Standardize the spacing on an 8px scale.
6. Write an implementation spec for Claude Code with exact sizes, colors, copy, accessibility rules and schema.
7. Build it, test it at widths from 360 to 2560px, and validate the schema with Google's [Rich Results Test](https://search.google.com/test/rich-results).

**Mobile got its own order, not a smaller desktop.** My first mobile homepage stacked every desktop section and came out about 3,000px tall. The final version is about 1,400px, roughly half. I decided what a visitor needs on the first screen (who I am, two buttons and recent posts) and cut or reordered the rest. The large photo became a small avatar next to my name, and the menu became a floating button you can reach with one thumb.

**Every design choice also had to stay crawlable.** Collapsible sections on the About and Skills pages use the native HTML `<details>` element, so the text stays in the page for search engines. Blog filters only hide posts that already exist in the HTML. Shorter mobile text is switched with CSS, never generated with JavaScript.

## What went wrong, and how did I fix it?

Most of my problems came from file paths, names and one misplaced file, not from code. If your deploy fails, check these first.

| Problem                              | Cause                                                            | Fix                                                                                                  |
| :----------------------------------- | :--------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| Project created in the wrong folder  | My folder name had an accent (`Portfólio`)                        | Use simple paths with no accents or spaces, like `C:\projects\portfolio`                              |
| "Repository not found" on push       | The repo name didn't match my real username, which had a hyphen | Renamed the repo to `username.github.io` and updated the remote with `git remote set-url`             |
| Site not published                   | The repo was private                                             | Free GitHub Pages needs a public repo                                                                |
| Workflow never ran                   | `deploy.yml` was in `.github/` instead of `.github/workflows/`   | Moved it with `git mv`                                                                               |
| "No event triggers defined in on"    | The workflow file was empty or badly indented                    | Re-pasted the YAML using spaces, not tabs                                                            |
| Build failed (exit code 1)           | The build used an older Node version                             | Added `node-version: 24` to the Astro action                                                         |
| Two deploys competing                | Pages source was set to "Deploy from a branch"                   | Switched the source to GitHub Actions                                                                |
| npm blocked in PowerShell            | Windows script execution policy                                  | Ran `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`                                            |
| Astro config wouldn't load           | I pasted header code into `astro.config.mjs`                     | Restored it with `git checkout -- astro.config.mjs`                                                  |
| Personal email on a public site      | Used the wrong address in the first version                      | Replaced it across all files with find and replace in VS Code                                        |
| Brand name already taken             | I didn't search the name before building                         | Rebranded to my own name, which meant a new username, address and Search Console property            |

The redesign had its own mistakes, mostly about doing too much. I added heavy white cards and a dark contact band, then went back to minimal rows. I changed a layout that already worked and had to revert it. My first blog filter was a dropdown that covered the posts, so I replaced it with a toggle that opens inline. The fix each time was the same: change one thing at a time.

## How did I set up technical SEO and schema?

The site follows the same technical checklist I'd recommend to a client: easy to crawl, clear about who's behind it, and fast. If you're new to these terms, [my beginner guide to SEO](/blog/what-is-seo/) explains the basics.

**Crawling and indexing**

- A canonical URL on every page, always with a trailing slash.
- An XML sitemap generated automatically (8 URLs at launch). Unfinished case studies stay out of it.
- A `robots.txt` file that allows all crawlers, including AI search crawlers, and points to the sitemap.
- Internal links written with trailing slashes, so GitHub Pages never has to redirect them.

**Structured data (JSON-LD)**

The main decision was to make me one clear entity that every page points to. That way, search engines and AI tools connect each post and project to the same person.

- **One Person** with a fixed ID on the About page, holding my job title, location, skills, certifications and profiles like LinkedIn.
- **Every post** uses BlogPosting, with the author and publisher pointing to that same Person, plus dates, word count, reading time and category.
- **Case studies** use Article and BreadcrumbList; the About page uses ProfilePage; the site as a whole uses WebSite.
- **Reading time and word count are calculated** from the post text, never typed by hand, so the schema and the page always match.
- **The byline and author box match the schema**, so what people see and what machines read say the same thing.

Search Console confirmed the breadcrumbs ("1 valid item detected"), and I check all schema with the Rich Results Test before publishing.

**Performance and media**

- A self-hosted, preloaded font.
- The hero image was renamed descriptively, cropped, compressed to 164 KB, converted to WebP at build time and loaded with high priority, since it's the largest element on the page.
- Descriptive alt text on every image, and a photo credit on every stock photo.

**Sharing**

- Open Graph and X cards with a 1200 × 630 share image.
- A branded favicon in SVG and ICO.

## What did I do for GEO and AI search?

For GEO, I focused on making the site easy for AI tools to read, trust and quote: clear answers, clear structure and one clear author. These are the same habits that [Reply's GEO guide](https://www.reply.com/en/digital-experience/geo-content-optimization) and [Geeky Tech](https://www.geekytech.co.uk/geo-in-different-content-types-blogs-guides-docs/) recommend for blog content.

- **Answer-first writing.** The first paragraph of every post gives the full answer, like the one at the top of this post.
- **Question-style headings** and an "On this page" table of contents, so both readers and AI tools can jump to the part they need.
- **Clear entities.** My name, skills and work are written the same way in the text, in the schema and on LinkedIn.
- **An `llms.txt` file**, generated automatically at build time, that summarizes the site for AI assistants. It's a new [community proposal](https://llmstxt.org/), not an official standard, so I treat it as a small extra, not a ranking trick.
- **AI crawlers allowed** in `robots.txt`.
- **Bing Webmaster Tools**, because Bing's index feeds Copilot and other AI search tools, not only Bing itself.

Next, once the pages are indexed, I'll test the questions this blog answers in ChatGPT, Perplexity and Gemini to see which sources they cite. That shows me what I need to beat.

## What would I do differently?

The biggest lesson: decide your name and your address before you write any code. Here's the order I'd follow next time.

1. **Search the brand name first.** Check Google, company registries and freelance platforms before using a name anywhere. My rebrand cost me a new GitHub username, a new address and a new Search Console property.
2. **Fix the address before Search Console.** Pick your final host, username or domain first, because every URL change resets the property.
3. **Use a professional email from day one.** An old address stays in the public Git history even after you replace it.
4. **Keep project paths simple.** No accents or spaces.
5. **Open the project folder in VS Code before anything else,** so every terminal starts in the right place.
6. **Check the workflow file's location and the Node version** before the first push.
7. **Strip the template early.** Delete sample posts, placeholder images and unused components before they reach the sitemap.
8. **Measure a baseline first.** Record PageSpeed scores and Search Console data before changing anything, so you can show before and after.
9. **Start with mobile and a first-screen goal,** then expand to desktop.
10. **Set design tokens and an 8px spacing scale on day one,** before any layout.
11. **Keep one data file for facts,** like metrics, dates and author details, so every page shows the same numbers.
12. **Plan the author entity and schema first,** since they decide what must be visible on each page.
13. **Collect proof as you work,** like before-and-after numbers and screenshots, instead of rebuilding it later.

Want to see these basics applied to a real project? Read the [GreenSip case study](/case-studies/greensip-mini-capstone/). New to SEO? Start with [What is SEO? A simple, complete guide for beginners](/blog/what-is-seo/). And if you'd like to talk about SEO or GEO work, [get in touch](/contact/) or [connect with me on LinkedIn](https://www.linkedin.com/in/anacpsg).

## FAQ

### Is GitHub Pages good for SEO?

Yes, for a static site. It serves plain HTML over HTTPS, and you control the sitemap, robots.txt, canonical URLs and schema yourself. What matters most is a stable address and a well-built site, not the host.

### Can I use a custom domain later?

Yes. GitHub Pages supports custom domains, and Astro's deploy guide explains how. Plan for it, though: a new domain is a new address, so you'll need a new Search Console property and redirects from the old URLs.

### Do I need to know how to code?

No, but you'll learn some along the way. I started with no experience in Node.js, Git or static sites, and used an AI assistant to explain each step and error. Expect to spend most of your time on setup, file paths and deploy settings.

### Is it really free?

Yes. Astro, Node.js, Git, VS Code and GitHub Pages are all free for a public site. The only optional cost is a custom domain.

### How long does it take?

It took me five days from installing the tools to requesting indexing, including a rebrand. Without the rebrand and the deploy errors, a basic site could be live in a day or two.

## Sources

- Astro Docs: [Deploy your Astro site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- Search Engine Land: [What is SEO? Search engine optimization](https://searchengineland.com/guide/what-is-seo)
- Reply: [The new search: how to master generative engine optimization](https://www.reply.com/en/digital-experience/geo-content-optimization)
- Geeky Tech: [GEO in different content types: blogs, guides, docs](https://www.geekytech.co.uk/geo-in-different-content-types-blogs-guides-docs/)
- llmstxt.org: [The llms.txt proposal](https://llmstxt.org/)
- Google: [Rich Results Test](https://search.google.com/test/rich-results) and [Search Console](https://search.google.com/search-console/about)
- Microsoft: [Bing Webmaster Tools](https://www.bing.com/webmasters/about)

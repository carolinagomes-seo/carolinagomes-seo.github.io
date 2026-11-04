---
title: 'Free SEO tools in 2026: the stack I actually use'
seoTitle: 'Free SEO tools in 2026: my stack'
description: 'The free SEO tools I use on my own site in 2026: Search Console, Bing Webmaster Tools, GA4, Ahrefs, Screaming Frog and a free way to check AI visibility.'
pubDate: 2026-11-04
category: 'SEO tools'
image: '../../assets/free-seo-tools-laptop-dock-keyboard-black-and-white.jpg'
imageAlt: 'Black and white close-up of a laptop in the dark, with a row of app icons on the screen and backlit keyboard keys in the foreground'
imageCredit: 'Xuancong Meng on Unsplash'
imageCreditUrl: 'https://unsplash.com/pt-br/fotografias/um-close-up-de-um-teclado-bNf2me0mjCA'
---

**You can cover the basics of SEO in 2026 without paying for anything.** Google Search Console, Bing Webmaster Tools, Google Analytics 4, PageSpeed Insights, and Ahrefs' free tools show you how search engines see your site, how fast it is, who links to you, and even how often AI tools cite your pages. Paid tools save time and add competitor data, but they aren't where you should start.

> **About the author:** I'm Ana Carolina Gomes, an SEO specialist. In October 2026, I launched my own portfolio site and set up every tool in this guide on it, with a total cost of zero. Everything below comes from that setup, including what didn't work the first time.

**In this post, you'll learn:**

- Which free SEO tools you actually need, and in what order
- The free tools for technical SEO, keyword research, and backlinks
- How to track traffic and build reports for free
- How to check your visibility in AI answers without paying
- What I chose not to set up, and why

> **Key takeaways**
>
> - Start with Google Search Console and Bing Webmaster Tools. They're free and come straight from the search engines.
> - Bing Webmaster Tools now shows how often Copilot cites your pages, which makes it a free GEO tool.
> - Free versions of paid tools work best for your own site; competitor data is where the limits show.
> - A small site can run a full technical audit for free.
> - Free doesn't mean effortless: the setup takes time, and some reports take weeks to fill in.

## Which free SEO tools do you actually need?

Most sites need six free tools: two from the search engines, one for analytics, one for speed, one for backlinks, and one crawler. This is the stack I set up on my own site, in the order I'd install it again.

| Order | Tool | What it does | Free limit | What I use it for |
| --- | --- | --- | --- | --- |
| 1 | [Google Search Console](https://search.google.com/search-console/about) | Shows how Google crawls, indexes, and ranks your pages | Free, no limits for your own site | Indexing status, search queries, sitemap |
| 2 | [Bing Webmaster Tools](https://www.bing.com/webmasters/about) | The same for Bing, plus AI citation data | Free | Bing indexing and Copilot citations |
| 3 | [Google Analytics 4](https://analytics.google.com/) | Tracks what visitors do on your site | Free | Traffic sources and engagement |
| 4 | [PageSpeed Insights](https://pagespeed.web.dev/) | Tests speed and Core Web Vitals | Free | A baseline before and after changes |
| 5 | [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) | Site audit, backlinks, and keywords for your own site | 5,000 crawl credits per month; 1,000 backlinks and keywords visible at once | Backlinks and technical issues |
| 6 | [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) | Crawls your site like a search engine | Up to 500 URLs per crawl | Full technical audits of small sites |

If you only have an hour, set up the first two. They come straight from the search engines, and everything else builds on them.

## Why should you start with Google Search Console and Bing Webmaster Tools?

Because they're the only tools that show data straight from the search engines: which pages are indexed, which searches show your site, and what's broken. Every other tool estimates; these two report.

**Google Search Console** is where you submit your sitemap, check whether pages are indexed, and see the queries that bring impressions and clicks. One thing to know in 2026: Google includes AI Overviews and AI Mode data in the regular performance reports, so you can't separate AI visibility from classic search there ([Momentic](https://momenticmarketing.com/blog/bing-wmt-ai-performance-report) explains this well).

**Bing Webmaster Tools** takes a few minutes to set up if you already use Search Console, because you can import your site from it. It's worth it for two reasons: Bing powers Microsoft Copilot, and since February 2026 it has an AI Performance report (more on that below).

**What happened when I set them up:** Google indexed my home page, blog page, and first two posts within days. The sitemap was a different story: Search Console showed "Couldn't fetch" for days, even though the file was valid and opened normally. Here's what I learned:

- Check that you submitted the exact sitemap URL. My Astro site uses `sitemap-index.xml`, not `sitemap.xml`.
- Test the sitemap URL with the URL Inspection tool. If Google can fetch it, the file is fine.
- Don't keep deleting and resubmitting it. On a new site, Google may simply wait before reading it.
- Request indexing for your most important pages one by one in the meantime.

## What are the best free tools for technical SEO?

For a small site, four free tools cover a full technical audit: PageSpeed Insights for speed, Google's Rich Results Test for structured data, Screaming Frog for crawling, and Ahrefs' Site Audit for a monthly health check.

| Tool | What it checks | Free limit |
| --- | --- | --- |
| [PageSpeed Insights](https://pagespeed.web.dev/) | Speed, Core Web Vitals, accessibility, basic SEO | Free, any public URL |
| [Rich Results Test](https://search.google.com/test/rich-results) | Whether your structured data qualifies for rich results | Free, any public URL |
| [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/pricing/) | Broken links, redirects, titles, meta descriptions, duplicates, sitemaps | 500 URLs per crawl; advanced features need a paid license |
| [Ahrefs Site Audit](https://ahrefs.com/webmaster-tools) (in Ahrefs Webmaster Tools) | 170+ technical and on-page issues, tracked over time | 5,000 crawl credits per month, verified sites only |

**My baseline, as an example:** On October 16, 2026, I tested my site's three main pages in PageSpeed Insights. The two blog posts scored 100 for performance on both mobile and desktop, and the home page scored 97 on mobile and 95 on desktop. The test also flagged one real issue: the home page's Largest Contentful Paint on mobile was 2.5 seconds, right at the limit of "good". The likely cause is the large photo at the top, which is now on my fix list.

Two tips. First, save your scores before you change anything, so you can show the before and after. Second, if your site has fewer than 500 pages, Screaming Frog's free version is all the crawler you need.

## What are the best free tools for keyword research?

The best free keyword data comes from Google itself: Search Console for the searches you already show up for, and Google's own results for what people ask next. Free versions of paid tools add volume estimates, but with tight daily limits.

| Tool | What it's good for | The catch |
| --- | --- | --- |
| Google Search Console | Real queries that already bring you impressions | Only shows data once your site gets impressions |
| Google search results | Autocomplete, "People also ask", and related searches show how people phrase questions | Manual work, one search at a time |
| [Google Trends](https://trends.google.com/trends/) | Comparing interest in topics over time and by country | Shows relative interest, not search volume |
| [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) | Keyword ideas and search volume | Needs a Google Ads account; volumes are often shown as ranges |
| [Ahrefs free keyword tools](https://ahrefs.com/free-seo-tools) | Keyword ideas and difficulty | Limited results per search |
| Free accounts in other suites (Semrush, Ubersuggest) | Competitor keywords | A small number of searches per day |

How I use them together: I start with "People also ask" and autocomplete to find the questions, check Google Trends to make sure the topic isn't fading, and use a free suite only to compare two or three keyword options. For a new site, the questions matter more than the exact volumes.

## What are the best free tools for backlinks and off-page SEO?

For your own site, Ahrefs Webmaster Tools is the most complete free backlink tool I know. For other sites, free tools only show a sample, so use them to find ideas, not to judge a whole link profile.

| Tool | What it shows | Free limit |
| --- | --- | --- |
| Google Search Console, Links report | Who links to you and your most linked pages | Your own site; [Ahrefs notes](https://ahrefs.com/webmaster-tools) it shows the top 1,000 links |
| [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools), Site Explorer | All known backlinks, link types (nofollow, UGC, sponsored), broken links | Verified sites only; up to 1,000 backlinks visible at once |
| [Ahrefs Backlink Checker](https://ahrefs.com/backlink-checker) | A sample of backlinks for any site | Top results only |
| [Google Alerts](https://www.google.com/alerts) | New mentions of your brand or topic | Free |
| Google search operators | Unlinked mentions, with a search like `"your brand" -site:yourdomain.com` | Manual |

Link building has been my main work since 2023, and this is the free routine I'd use on a small site:

1. Check Search Console and Ahrefs Webmaster Tools once a month for new and lost links.
2. Set a Google Alert for your brand name, and ask sites that mention you without linking to add a link.
3. Use the Ahrefs Backlink Checker on two or three similar sites to find resource pages and blogs that might link to you too.
4. Before you reach out, open each site and check that it's real and relevant. No free metric replaces that step.

If you want the full process, I explain it in [*What is link building, and how does it work?*](/blog/what-is-link-building/)

## What are the best free tools for analytics and reporting?

Google Analytics 4 tells you what visitors do once they arrive, and Looker Studio turns Search Console and GA4 data into a free dashboard. Together, they replace most paid reporting tools for a small site.

- **[Google Analytics 4](https://analytics.google.com/):** traffic sources, top pages, and engagement. I set it up on my portfolio in October 2026. A useful free trick: filter the referral sources for AI tools such as chatgpt.com and perplexity.ai to see who arrives from AI answers.
- **[Ahrefs Web Analytics](https://ahrefs.com/web-analytics):** included in Ahrefs Webmaster Tools, with up to 1 million events per project. Ahrefs describes it as a privacy-focused alternative to GA4 that also tracks traffic from AI tools.
- **[Looker Studio](https://lookerstudio.google.com/):** connect Search Console and GA4, and build a one-page report you can check every month instead of opening three tools.

Start simple: one monthly report with impressions, clicks, top pages, and new links is enough for the first six months.

## How can you check your AI visibility for free?

The only free tool with real AI citation data in 2026 is Bing Webmaster Tools' AI Performance report. For ChatGPT, Perplexity, and Gemini, the free method is still a manual test.

**Bing's AI Performance report:** Microsoft launched it as a public preview in February 2026. According to [Momentic's walkthrough](https://momenticmarketing.com/blog/bing-wmt-ai-performance-report), it shows:

- How many times your site was cited in AI answers in Microsoft Copilot, Bing's AI summaries, and some partner integrations
- Which of your pages were cited
- The "grounding queries" the AI used to find your content, which are closer to topics than to what people typed

It doesn't show clicks, and it doesn't cover Google, ChatGPT, or Perplexity. Still, it's the clearest free view of how an AI system uses your content.

**A manual test for everything else:** This is what I do once a month:

1. Write 10 to 20 questions your content answers, the way a real person would ask them.
2. Ask the same questions in ChatGPT, Perplexity, and Gemini.
3. Record in a spreadsheet whether your site or brand appears, and which sources are cited instead.
4. Repeat with the same questions each month, so you can compare.

It's slow, but it's free, and the list of sites the AI cites instead of you is a great list of link building targets.

## What did I skip, and why?

I skipped anything that cost money or time without changing a decision on a small site. Free tools have limits, and knowing when not to use one is part of using them well.

- **Search Console bulk export to BigQuery:** It sends your raw Search Console data to Google Cloud, which is great for big sites. When I tried to set it up, Google Cloud asked me to add a prepayment before I could start (check [Google Cloud's pricing](https://cloud.google.com/pricing) for your country). For a portfolio with a handful of pages, the regular reports are more than enough, so I stopped there.
- **A paid SEO suite:** Paid plans add competitor data and higher limits; Ahrefs, for example, starts at $29 a month with its Starter plan. For my own site, the free versions already show everything I need.
- **A separate rank tracker:** Search Console's average position is enough until you have dozens of keywords worth tracking daily.

My rule: upgrade when a free limit stops you from doing a task you need every week, not before.

## FAQ

### Can you do SEO with only free tools?

Yes, especially on a small or new site. Free tools cover indexing, speed, technical audits, backlinks, and analytics. What you lose is competitor data and time-saving features.

### What is the most important free SEO tool?

Google Search Console. It's the only place to see how Google actually indexes your pages and which searches show your site.

### Is Ahrefs Webmaster Tools really free?

Yes, for websites you verify as yours. It includes Site Audit, Site Explorer, and Web Analytics with monthly limits, but it can't analyze competitor sites.

### Is there a free tool to see if ChatGPT cites my site?

Not directly. Bing Webmaster Tools shows citations in Microsoft Copilot and Bing's AI answers. For ChatGPT, Perplexity, and Gemini, test your questions manually each month.

### When should I pay for an SEO tool?

When a free limit blocks a task you do every week, like researching competitors or tracking many keywords. Until then, free tools are enough.

## Final thoughts: where should you start?

Start with Google Search Console and Bing Webmaster Tools today, add Google Analytics 4 and PageSpeed Insights this week, and save your first scores as a baseline. Then add Ahrefs Webmaster Tools and Screaming Frog when you're ready for your first audit.

New to SEO? Read [*What is SEO? A simple, complete guide for beginners*](/blog/what-is-seo/) first. To see how I set these tools up on a real site, read [*How I built a free SEO portfolio with Astro and GitHub Pages*](/blog/how-i-built-my-seo-portfolio-site/).

## Sources

- Ahrefs: [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (features and limits)
- Screaming Frog: [SEO Spider pricing](https://www.screamingfrog.co.uk/seo-spider/pricing/)
- Momentic: [Initial thoughts on AI Performance reports in Bing WMT](https://momenticmarketing.com/blog/bing-wmt-ai-performance-report)

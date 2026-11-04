# Content guide

How to add and update content on the site.

**Blog post:** add a Markdown file to `src/content/blog/`:

```yaml
---
title: 'Post title'
description: 'One or two sentences.'
pubDate: 2026-10-07
category: 'SEO basics' # becomes a topic filter on /blog/
image: '../../assets/my-cover.jpg' # a file in src/assets/
imageAlt: 'What the image shows'
# Optional: updatedDate, tags: ['...'], imageCredit, imageCreditUrl, draft: true
---
```

A `## FAQ` section with `### Question` headings is turned into `FAQPage` schema automatically.

**Case study:** add a Markdown file to `src/content/case-studies/`. Write a body to give it its own page; leave it empty to list it as a plain row.

```yaml
---
title: 'Case study title'
description: 'One-sentence summary.'
type: 'professional' # or 'course', 'personal'
order: 1 # lower numbers appear first
metric: { value: '250+', label: 'links per quarter' } # or:
# status: { label: 'In progress', tone: 'progress', note: 'Full write-up soon' }
pubDate: 2026-10-07
tools: ['Ahrefs', 'Python']
# Optional: updatedDate, image + imageAlt (share and schema image; defaults to og-default.png)
---
```

**Skills, experience, certifications:** edit `src/data/skills.ts` and `src/data/author.ts`. The pages, the schema and `llms.txt` all read from these files.

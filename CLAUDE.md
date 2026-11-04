## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Design tokens

- Layout and type tokens live in `src/styles/global.css` (`:root` and its media queries): `--container`,
  `--pad`, `--fs-h1` (page titles and the home headline), `--fs-title` (post and case study titles),
  `--prose`, `--measure-title`, `--measure-lede`, `--measure-intro`. Use them instead of new px values.
- Breakpoints: 1600 / 1279 / 1023 / 767 px. Exceptions on purpose: About switches to one column at 860px
  and the header hides its tagline below 360px.
- `sizes` on images can't use CSS variables: write the real widths per breakpoint.
- Private files (audits, analytics exports, screenshots) go in `audits/` or `data and prints/`, both ignored.

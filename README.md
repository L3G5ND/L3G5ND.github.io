# Malachi Holland — Software portfolio

A Next.js App Router portfolio built with React, JavaScript, and CSS modules.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The build generates `out/` for static hosting. Edit `src/` and `public/`, not the generated output. `node_modules/`, `.next/`, and `out/` are ignored dependency/build directories.

## Content and structure

- `src/config.js`: profile, portrait, email, social contacts, software skills and projects. The `roblox` object holds games, libraries, experiments, and Roblox skills.
- `src/app/`: homepage, Contact, Work, software project details, and Roblox experiment details.
- `src/components/`: shared header, pillars, project cards, collection switch, and Roblox collection.
- `public/`: the current portrait, game videos, and experiment thumbnails used by the site.
- `.openai/hosting.json`: reserved Sites identity and static deployment configuration; local builds do not publish the site.

The homepage contains the biography and Roblox origin story. `/portfolio` shows software work; `/portfolio?view=roblox` switches to the Roblox collection. `/roblox/project/[id]` provides the four experiment video pages. There are no standalone About, pricing, or Roblox collection landing pages.

Contacts are Email, Discord, GitHub, and Twitter. Both the header and homepage use `portrait` from the config. Decorative pillars stay in desktop margins and are hidden on narrow screens.

RoTrader copy is based on the adjacent project README. Its preview is a stylized illustration, not a product screenshot.

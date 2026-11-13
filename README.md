# Hamlet website

The website for Hamlet, a village of free, open-source, self-hosted tools for small organizations. Built with [SvelteKit](https://svelte.dev/docs/kit) and prerendered to static files.

## Pages

| Route        | What it is                                                         |
| ------------ | ------------------------------------------------------------------ |
| `/`          | The scrolling home page                                            |
| `/village`   | The interactive village map: drag to look around, click a building |
| `/town-hall` | Town Hall (volunteer management)                                   |
| `/pavilion`  | Pavilion (restaurant management)                                   |

The two building pages also open inside windows on the village map.

## Layout

- `src/routes/` — one folder per page
- `src/lib/buildings/` — the Town Hall and Pavilion pages, shared by their routes and the map
- `src/lib/components/` — icons, emblems, map windows and the guidebook
- `src/lib/content.ts` — copy and links used on more than one page
- `src/app.css` — design tokens and shared classes
- `static/img/` — pixel art and screenshots

## Developing

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
npm run preview
```

The static site is written to `build/` and can be served from any static host.

Other scripts: `npm run check` (type-check) and `npm run format` (Prettier).

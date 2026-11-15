# Hamlet website

The website for Hamlet, a village of free, open-source, self-hosted tools for small organizations. Built with [SvelteKit](https://svelte.dev/docs/kit). Pages are prerendered and served by a small Node server, which also files bug reports from the feedback form.

## Pages

| Route                                                 | What it is                                                                   |
| ----------------------------------------------------- | ---------------------------------------------------------------------------- |
| `/`                                                   | The village map on desktop-sized windows, the scrolling page on smaller ones |
| `/village`                                            | The interactive village map: drag to look around, click a building           |
| `/town-hall`                                          | Town Hall (volunteer management)                                             |
| `/pavilion`                                           | Pavilion (restaurant management)                                             |
| `/feedback`                                           | Give feedback: choose between a bug report and a feature request             |
| `/feedback/report`                                    | Report a bug: choose the building                                            |
| `/feedback/report/town-hall`, `/pavilion`, `/website` | The bug report form for that building                                        |
| `/feedback/request`                                   | Request a feature: links to the feature boards                               |
| `/feedback/request/town-hall`, `/pavilion`            | Redirect to that building's feature board                                    |

The building pages also open inside windows on the village map. On desktop-sized windows the `/feedback` addresses open the map with the feedback window on that screen; on smaller ones they are pages of their own.

## Layout

- `src/routes/` — one folder per page
- `src/lib/buildings/` — the Town Hall and Pavilion pages, shared by their routes and the map
- `src/lib/components/` — icons, emblems, map windows and the guidebook
- `src/lib/content.ts` — copy and links used on more than one page
- `src/lib/feedback.ts` — the feedback form's questions and rules, shared with the server
- `src/routes/api/bug-report/` — the endpoint that turns a bug report into a GitHub issue
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
npm start
```

`npm start` runs the server from `build/` on `$PORT` (3000 if unset). Node 22 or newer is required.

## Feedback

Feature ideas are sent to each building's feature board. Bug reports are filed as GitHub issues in the building's repository, which needs a token:

| Variable                                                               | What it does                                                                                                                                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `GITHUB_TOKEN`                                                         | A fine-grained token with "Issues: read and write" on the three repositories. Without it, the form tells people to report on GitHub themselves. |
| `GITHUB_REPO_TOWN_HALL`, `GITHUB_REPO_PAVILION`, `GITHUB_REPO_WEBSITE` | Optional. Override where reports go, as `owner/name`.                                                                                           |
| `ADDRESS_HEADER`                                                       | Optional. Behind a reverse proxy, set to `x-forwarded-for` so the per-visitor limit counts real visitors.                                       |

See `.env.example`. The endpoint allows 5 reports per visitor every 10 minutes and 40 an hour overall.

Other scripts: `npm run check` (type-check) and `npm run format` (Prettier).

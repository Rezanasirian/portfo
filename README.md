# rezanasirian.ir

Personal portfolio of Reza Nasirian - AI & BI Engineer.

Single-page React app. All copy lives in [`src/data/content.json`](src/data/content.json);
components are presentational and read from it, so content changes never require touching JSX.

## Stack

- React 18 via Create React App (`react-scripts` 5)
- Font Awesome 6 from CDN in [`public/index.html`](public/index.html) - no CSS framework;
  layout is hand-written CSS grid/flexbox on the tokens in `index.css`
- `react-scroll` for section navigation, `react-awesome-reveal` for entrance animations
- Hand-written design tokens and layout in [`src/index.css`](src/index.css)

## Develop

```bash
npm install
npm start
```

Ports 3000/3001 are occupied on the author's machine by an unrelated process, so use:

```powershell
$env:PORT="5555"; npm start
```

## Deploy

```bash
npm run build     # outputs to build/
npm run deploy    # publishes build/ to gh-pages
```

`homepage` in [`package.json`](package.json) is set to `https://rezanasirian.ir`.

## Editing content

| What | Where |
| --- | --- |
| Name, tagline, about text, CV link, socials | `profile` in `content.json` |
| Job history (accordion) | `experience[]` |
| Project cards | `projects[]` - `img` resolves against `src/assets/` |
| Tech stack groups | `stack[]` |
| Degrees | `education[]` |

Section order and anchor names are defined in [`src/App.js`](src/App.js); the nav items that
target them are in [`src/components/Navbar.js`](src/components/Navbar.js). The two must stay in sync.

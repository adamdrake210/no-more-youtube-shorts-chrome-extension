# No More YouTube Shorts Please

A Chrome extension that blocks YouTube Shorts from appearing on your YouTube homepage.

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **pnpm** - Fast, disk space efficient package manager

## Prerequisites

- Node.js v20 or higher
- pnpm v10 or higher

## Installation

```bash
# Install dependencies
pnpm install
```

## Development

```bash
# Start the dev server
pnpm run dev
```

The dev server will run at `http://localhost:5173/`

- View the popup at: `http://localhost:5173/src/popup/`

## Build

```bash
# Build the extension
pnpm run build
```

This creates a production-ready extension in the `dist/` folder.

## Icon Generation

Visit here: https://alexleybourne.github.io/chrome-extension-icon-generator/

## Load in Chrome

1. Run `pnpm run build` to create the `dist` folder
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the `dist` folder from this project

## Project Structure

```
├── src/
│   ├── assets/          # Icons and static assets
│   ├── popup/           # Extension popup UI
│   │   ├── index.html
│   │   └── popup.tsx
│   ├── background.ts    # Background service worker
│   ├── content.ts       # Content script
│   └── manifest.json    # Extension manifest
├── dist/                # Build output (generated)
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## License

ISC

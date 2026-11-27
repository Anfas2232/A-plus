# A Plus Tech UAE React website (layout-fixed starter)

## Run locally
1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm install` in the terminal.
4. Run `npm run dev` and open the local URL shown (normally http://localhost:5173).
5. Verify Tailwind is active: the header should be dark/navy, spacing and grids should be styled. For a quick test, temporarily add `className="bg-red-500 text-white p-4"` to an element; it should become red with white text and padding. Remove the test afterward.

## Build check
Run `npm run build`. Successful completion creates the `dist` folder.

Tailwind v4 is configured through `@tailwindcss/vite` and `@import "tailwindcss"` in `src/index.css`.

# Vanilla JS responsive task list UI

This example recreates the task list layouts from the reference screens using **plain HTML, CSS/SCSS, and JavaScript**—no frameworks required. It mirrors the desktop and mobile experiences with inline filters, a slide-out filter panel on small screens, and a detail drawer for descriptions. The Angular prototype has been removed so the demo is 100% JavaScript-driven.

## Files
- `index.html` — markup for the filter panel, task table, and description drawer.
- `styles.scss` — source styles using SCSS variables.
- `styles.css` — compiled CSS that the page consumes directly.
- `app.js` — small script that renders tasks, syncs filters, and powers the drawer/panel interactions.

## Running the static demo
1. Open `vanilla-screens/index.html` in your browser (you can use a simple static server like `npx serve vanilla-screens` or VS Code Live Server).
2. Interact with the list:
   - Toggle completion checkboxes, open rows to view details, and delete items.
   - Enter start/end dates to filter the list (desktop filters inline; mobile filters slide in from the left).
   - Use the “Close” buttons or tap the scrim to dismiss the drawer or filter panel on small screens.

If you edit `styles.scss`, recompile it to `styles.css` (e.g., `npx sass vanilla-screens/styles.scss vanilla-screens/styles.css`).

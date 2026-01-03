# Industrial Engineer Portfolio (Static)

This repository is now a single-page static site that mirrors the previous front-end design without any build tools or package dependencies. Everything is plain HTML, CSS, and JavaScript powered by the Tailwind CDN and Lucide icons.

## Getting started
- Open `index.html` directly in your browser, or serve the folder with a simple static server (e.g., `python -m http.server`).
- No installation or build steps are required.

## Project structure
- `index.html` – Page markup, Tailwind configuration, and section layout.
- `styles.css` – Light custom styles for typography, navbar scroll state, and toast animation.
- `script.js` – Data-driven rendering for navigation, skills, experience, projects, and contact form behavior.
- `public/` – Static assets such as placeholders and icons.

## Customization
- Update the content arrays in `script.js` to change navigation links, skills, education, experience entries, and projects.
- Swap placeholder images with real assets in `public/` and update the paths in `projectSections` within `script.js`.
- Replace social/contact href values in `contactLinks` to point to your real profiles.

## Contact form
The contact form is purely front-end and simulates a send action with a toast notification. Connect it to your preferred backend or form service if you need real submissions.

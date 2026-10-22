# Jason Berdisola — Portfolio

A responsive, interactive portfolio built as a static HTML site, with Tailwind CSS compiled locally for production.

## Run locally

Install Node.js, then run:

```sh
npm ci
npm run build
```

Open `dist/index.html` in a browser, or serve the `dist` folder with any static file server. For CSS watch mode during development, run `npm run dev` and open the root `index.html`.

The **Download CV** button downloads `Jason_Berdisola_CV.html`. Open the file in a browser and use **Print / Save as PDF** to export a PDF copy.

In Windows PowerShell, use `npm.cmd` instead of `npm` if the script execution policy blocks `npm.ps1` (for example, `npm.cmd ci` and `npm.cmd run build`).

## Deploy to GitHub Pages

1. Push this repository to GitHub using the `main` or `master` branch.
2. In **Settings → Pages**, set the build and deployment source to **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes the site after each push.

## Deploy to Vercel

Import the repository in Vercel and leave the framework preset as **Other**. The included `vercel.json` builds the site and deploys the `dist` folder.

## Contact form

The contact form opens a pre-filled email draft in the visitor's email app. The visitor must send that draft to deliver the message. A server-side form provider or API is needed for direct submissions without an email app.

Tailwind CSS is built locally; Font Awesome and Google Fonts load from their CDNs.

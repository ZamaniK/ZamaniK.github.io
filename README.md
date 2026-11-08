# Zamani Mthembu Portfolio

React + TypeScript portfolio powered by Node.js and Vite.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. The print-ready CV is copied from `public/cv.html` and can be saved as a PDF from the browser.

## Run locally with Podman

The `Containerfile` builds the Vite site in Node.js and serves the production output with an unprivileged Nginx container. On Windows, start the Podman machine once before building:

```powershell
podman machine init
podman machine start
podman build -f Containerfile -t localhost/zamani-portfolio:latest .
podman run -d --name zamani-portfolio -p 8080:8080 localhost/zamani-portfolio:latest
```

Open [http://localhost:8080](http://localhost:8080). The container health endpoint is `/healthz`.

To replace a running container, stop and remove it before running the `podman run` command again:

```powershell
podman stop zamani-portfolio
podman rm zamani-portfolio
```

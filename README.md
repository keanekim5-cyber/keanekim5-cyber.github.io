# Keane Kim — Portfolio

A personal portfolio built with Next.js (App Router), TypeScript, and
Tailwind CSS v4. Dark-mode-first "maker/developer" aesthetic — near-black
surfaces, a teal signal accent for hardware/control, a violet accent for
chemistry/CAD.

## Requirements

- Node.js 20+ and npm

If `node -v` doesn't work in your terminal, install Node from
[nodejs.org](https://nodejs.org) (LTS build) or via `brew install node`,
then reopen your terminal.

## Run it locally

```bash
npm install   # first time only
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build` (production build), `npm start` (serve the
build), `npm run lint`, `npm run typecheck`.

## Structure

```
src/
  app/
    page.tsx                         Home — hero + featured projects
    projects/page.tsx                Full projects index
    projects/potato-cannon/
    projects/acetaminophen-synthesis/
    projects/3d-printing-cad/
    about/page.tsx                   Bio + skills
    layout.tsx, globals.css          Root layout, fonts, design tokens
  components/                        Navbar, Footer, ProjectCard,
                                      CodeBlock, MediaPlaceholder, etc.
  lib/
    projects.ts                      Single source of truth for project
                                      cards + detail-page specs/tags
    site.ts                          Contact email
```

## Before you deploy

- **Photos & videos** — see [Adding photos](#adding-photos) below.
- **Project repo link** — the comment in
  `src/app/projects/potato-cannon/page.tsx` references
  `/firmware/potato-cannon` on "the project repo"; point it at wherever
  your actual firmware lives, or remove the line.

The previous single-file static version of this site (plain HTML/CSS) is
kept at `legacy-static-site/index.html` for reference.

## Adding photos

**1. Drop the file in `public/`.** Anything in `public/` is served from
the site root — a file at `public/images/potato-cannon/chassis.jpg`
becomes the path `/images/potato-cannon/chassis.jpg`. Keep one folder per
project so files don't collide:

```
public/
  images/
    potato-cannon/
      frame.jpg
      wiring.jpg
    acetaminophen-synthesis/
      setup.jpg
      tlc-plate.jpg
    3d-printing-cad/
      ukulele-render.png
      keychain-photo.jpg
```

**2. Swap the placeholder for the real component.** Each project page
(`src/app/projects/*/page.tsx`) currently renders a dashed
`<MediaPlaceholder>` box for every photo/video slot. Replace it with
`<ProjectImage>` (for photos and renders) or `<ProjectVideo>` (for clips)
— both already match the site's styling, so nothing else needs to
change.

Before:

```tsx
<MediaPlaceholder
  kind="image"
  note="Full frame — wooden supports, base gear, and mounted launcher"
  caption="Photo — the assembled positioning rig."
/>
```

After:

```tsx
<ProjectImage
  src="/images/potato-cannon/frame.jpg"
  alt="Wooden two-axis frame with the launcher clamped in place"
  caption="Photo — the assembled positioning rig."
/>
```

Add the import at the top of the file: `import ProjectImage from
"@/components/ProjectImage";` (and `ProjectVideo` from
`@/components/ProjectVideo` if you're adding a clip). `wide` still works
the same way it did on `<MediaPlaceholder>`, for the 16:9 slots.

For a video:

```tsx
<ProjectVideo
  src="/videos/potato-cannon/test-fire.mp4"
  poster="/images/potato-cannon/test-fire-poster.jpg"
  caption="Video — aiming sweep, then a test fire."
/>
```

**Notes:**
- `alt` text is required on `<ProjectImage>` — describe what's in the
  photo, not the filename; it's read aloud by screen readers.
- Large source photos are fine — `next/image` resizes and compresses
  them automatically at build/request time.
- Video files can get large; if a clip is more than ~20–30MB, hosting it
  on YouTube/Vimeo and embedding an `<iframe>` instead usually loads
  faster than serving it directly from `public/`.

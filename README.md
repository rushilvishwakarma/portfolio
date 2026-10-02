# Portfolio

An interactive radial timeline built with Next.js, Motion and Tailwind CSS.

Hover a tick to see its label, click it (or scroll down) to zoom in, use the arrow keys to move between entries, and press Escape to zoom back out.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing the timeline

All entries live in [`components/radial-timeline/data.ts`](components/radial-timeline/data.ts). Each entry has:

- `name` and `year`: the label shown next to the tick
- `degree`: where the tick sits on the dial, from 0 to 179, clockwise from the top (45 = right, 90 = bottom, 135 = left). Keep entries in ascending order.
- `variant`: `"large"` labels are always visible, `"medium"` labels show on hover
- `title` and `image`: the heading and photo shown when the entry is opened

Photos are in `components/radial-timeline/images/` (from [Unsplash](https://unsplash.com)). The font is [Google Sans](https://fonts.google.com/specimen/Google+Sans), self-hosted from `public/fonts/`.

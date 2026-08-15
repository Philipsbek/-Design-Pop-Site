# pop site\*

A one-page marketing site for a fictional link-in-bio / one-page site builder, built with **Astro** and styled with the **Pop Site** design system — a "stark typographic gallery": an almost all-white canvas where monumental Satoshi display headlines (up to 120px) carry the weight, with a single vivid blue (`#3b82f6`) reserved exclusively for primary CTAs.

## Design system

| Token | Value |
|-------|-------|
| Canvas | `#ffffff` |
| Ink / text | `#000000` / `#171717` |
| Muted | `#5e5e5e` |
| Signal blue (CTA only) | `#3b82f6` |
| Wash blue | `#e3eeff` |
| Display font | Satoshi 700, 93–120px, tight negative tracking |
| Buttons | pill (`9999px`) |
| Depth | 1px hairline borders — no drop shadows |

## Sections

Nav · Hero (inline claim form + fanned phone mockups) · logo marquee · sections grid · alternating feature blocks · stats · templates gallery · testimonials marquee · pricing · final CTA · footer · floating help widget.

Animations are restrained and editorial: scroll-reveal, glass sticky nav, phone-fan hover, image zoom, dual marquees — all `prefers-reduced-motion` aware.

Content: generated copy. Imagery: [Picsum](https://picsum.photos) stock photos as template covers/avatars; phone-mockup interiors are self-referential per the design system.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to ./dist
npm run preview  # preview the build
```

Fonts load from Fontshare (Satoshi) and Google Fonts (Inter).

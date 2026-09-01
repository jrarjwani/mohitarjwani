# Melius Design System

> AI creative-canvas platform. **One platform. Every creative outcome.**
> Brief an agent ("Mel"), watch multimodal nodes assemble the work on a canvas, and steer any prompt until the output lands exactly as imagined.

This design system reproduces the visual language of the Melius marketing site and product canvas so design agents can build on-brand interfaces, mocks, and assets.

## Source material
- `uploads/Website.pdf` — 31-frame screen capture of **melius.com** (homepage hero, product canvas demo, persona showcase). Extracted page renders live in `scraps/page-01…31.png` for reference.
- Auto-extracted style brief (colors, type, component CSS, spacing) supplied with the project request.
- No codebase, Figma file, or vector logo was provided — the system is reconstructed from the screen capture and the style brief. Values are taken from the brief where given; visual details are read from the captures.

> **Note on the brand name.** The project's "company description" field said *Web MJ*, but every provided design material is the **Melius** website (melius.com) — copy, screens, and palette are all Melius. This system is therefore built and named for Melius. If Web MJ is a distinct brand, re-attach its materials and I'll rebrand.

## What Melius is (product context)
A node-based generative canvas for creative teams. A user briefs the agent **Mel** in a prompt composer; Mel assembles a graph of **nodes** — each node runs a named model (Nano Banana Pro, Seedance 2.0, Ideogram 4, GPT Image 2, Kling 3.0 Omni) and produces an **Image** or **Video**. Nodes chain together (studio shot → lifestyle video, fabric swatch + croquis → garment mockup → campaign, icon variations → selected mark → billboard) so a whole campaign assembles on one canvas.

Audiences (persona tabs on the site): **Agencies · CD/Filmmakers · Marketers · E-commerce · GTM/Growth**. Use-case tabs on the canvas demo: **Advertising · E-commerce · Filmmaking · Fashion · Branding**.

Two visual worlds:
1. **Marketing site** — light, warm, editorial. Serif display headline over a dotted off-white canvas, floating media cards.
2. **Product canvas** — dark, near-black dotted grid with node cards, orange type-pills, and orange bezier connection edges.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, editorial, creative-director-to-creative-director. Short declarative sentences, often in two beats separated by a period for rhythm: *"One platform. Every creative outcome."* / *"You can see the shot. You can describe it."* Big claims stated plainly, no hype words, no exclamation marks.

**Person.** Addresses the reader as **you** and positions them as the director: *"Be the creative director. Let agents be your team."* The product ("Mel", "our agent") is the team; the user is in charge. First-person plural ("our agent Mel") only for the product itself.

**Casing.** Sentence case for headlines and body. Display headlines use the serif; UI labels and buttons are Title Case and short ("Start for Free", "Sign In", "Try it now →"). Model names are Proper Case ("Nano Banana Pro", "Seedance 2.0"). Node role labels are Title Case ("Studio Shot", "Lifestyle Moment", "Garment Mockup").

**Tone by surface.**
- Hero: aspirational, two-beat. *"One platform. Every creative outcome."*
- Persona cards: problem→relief, specific to the audience. *E-commerce:* "The shoot that used to take three weeks, an afternoon on the canvas." *Agencies:* "Concept work that wins the pitch. Variant work that runs the campaign."
- Feature/prompt copy: imperative task strings, like real briefs. "Storyboard a 30-second trailer for a sci-fi short film…", "Turn a fabric swatch and croquis into a technical flat and campaign-ready garment…"

**Punctuation quirks.** Em-dashes and en-dashes for asides and ranges. Trailing "→" on links/CTAs. Ellipses on example prompts to imply they keep typing.

**Emoji.** None. Not part of the brand.

**Numbers & specifics.** Concrete, credible detail sells it — model version numbers, "30-second trailer", "three weeks → an afternoon". Avoid vague adjectives; name the thing.

---

## VISUAL FOUNDATIONS

**Palette.** Warm off-white canvas `#fafafa` is the primary ground. One dominant accent — **Melius orange `#f04e23`** — for primary CTAs, canvas connection edges, active tabs, and node type-pills. A **pale butter yellow `#fff78b`** is the secondary accent: the "Sign In" button and the yellow label tags on floating cards. Text is near-black `#0e0e0e` (never pure `#000`); muted text `#676767`. Borders and dark surfaces are `#1a1616`. The product canvas inverts to near-black `#0e0e0e` grounds with `#202020` node cards. Neutral grays `#d9d9d9`/`#ebebeb` for hairlines and placeholders. No blues, no purples in the chrome (purple/teal only ever appear inside generated-content thumbnails, never in UI).

**Type.** Two families. Display is a refined serif — the site uses **Reckless** (Displaay); this system substitutes **Newsreader** (Google Fonts) as the closest free match (moderate contrast, literary, slightly narrow). Body/UI is a neutral **grotesque system sans** (`ui-sans-serif` stack) exactly as the site ships. Headlines weight 400 with slightly tight tracking (`-0.02em`); body 400. The serif does the emotional work (hero + persona titles + magazine spine "MELIUS" set vertically); the sans does all functional text. Do not set body copy in the serif or headlines in the sans.

**Backgrounds.** Signature **dot grid** everywhere — faint dark dots on the light canvas, faint white dots on the dark canvas (`--dotgrid-*`, 22px cell). Full-bleed AI-generated imagery appears only *inside* media cards and node frames, never as a page background. Marketing sections are flat `#fafafa`; the product canvas is flat near-black. No page-level gradients, no photographic hero backgrounds, no textures beyond the dot grid.

**Imagery vibe.** Editorial and eclectic — the generated outputs span warm product photography, moody cinematic frames, fashion lookbooks, high-key studio, and abstract renders. Warm and cool both appear because it's *generated* content; the *chrome* stays neutral. In this system, demo imagery is rendered as on-brand placeholder tiles (solid/tinted, labelled) — supply real assets to replace them.

**Motion.** Calm and smooth, no bounce. The hero fans a horizontal array of media cards that drift/parallax; the composer types example prompts character-by-character (typewriter). Standard ease `cubic-bezier(0.4,0,0.2,1)`, ~220ms; entrances use a gentle ease-out. Canvas edges draw in as orange beziers. Nothing springs or overshoots.

**Hover states.** Buttons darken slightly (orange → `#d63d16`; yellow → `#f2e35a`); dark/ghost buttons lighten their fill a touch or raise opacity. Cards lift with a stronger shadow. Links go from orange to darker orange, underline on hover. Tabs: inactive is transparent/muted text, active is a filled orange pill.

**Press states.** Subtle — a small scale-down (~0.98) and the darker hover color; no color inversion.

**Borders.** Hairlines are `1px`. On light surfaces, subtle `#ebebeb`; structural borders `#1a1616`. Dark canvas nodes use a `#2e2e2e` border. Corners are consistently rounded: `6px` buttons, `10px` inputs/chips, `14px` cards/nodes, up to `20px` on large media cards. **Never sharp corners** — they read as hostile here.

**Shadows / elevation.** Soft and warm-tinted, never hard black. The signature card shadow is an orange-tinted oklab double-glow (`--shadow-card`). Floating polaroid cards use a soft neutral float shadow. Dark canvas nodes use a deeper `rgba(0,0,0,0.45)` drop. Elevation is expressed by shadow, not by borders.

**Transparency & blur.** Sparse. The prompt composer and floating chips sit on solid fills. The dark canvas uses flat panels, not glass. Avoid frosted-glass everywhere.

**Cards.** Rounded (14–20px), soft warm shadow, generous padding (24–32px). Media cards are edge-to-edge image with a small yellow label tag pinned top-right. The persona "magazine" card is portrait, white, with a vertical "MELIUS" spine label and a serif title + short sans paragraph.

**Layout.** 8px base grid; multiples only. Centered max-width container (~1200px) for marketing; the canvas is an unbounded pannable plane. Fixed floating navbar (black pill, top-left) and CTAs (top-right); a persistent top announcement bar. Persona/use-case tab bars are centered pills at the section base.

---

## ICONOGRAPHY

The Melius site is **icon-light** — it leans on type and imagery, not an icon system. The few glyphs present are generic UI marks: a **hamburger menu** (three lines) in the nav pill, a **right-arrow "→"** on CTAs and inside the composer send button, and small **model/type pills** (text, not icons). These are drawn as simple inline SVG strokes in components (generic UI glyphs, not brand marks).

- **No brand-supplied icon font or SVG sprite** was in the sources.
- For any broader icon needs, this system substitutes **[Lucide](https://lucide.dev)** (link from CDN) — a thin, rounded, 1.75–2px-stroke set that matches Melius's minimal line style. **Flagged substitution:** if Melius ships its own icon set, replace Lucide with it.
- **Emoji / unicode as icons:** never used.

**Logo / brand mark.** The nav shows a small "bowtie/hourglass" mark derived from an **M**, and the Branding demo shows several **M**-mark variations. **No vector logo file was provided**, and per policy the real mark is *not* reconstructed from the screen capture. Wherever a mark is needed, this system renders the **"Melius" wordmark in the display serif** (see `assets/`), plus a neutral placeholder glyph for the composer avatar. **Supply the official logo SVG** to replace the wordmark lockup and the composer mark.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import`s all tokens + the Newsreader webfont).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `readme.md` — this guide. `SKILL.md` — Agent-Skills wrapper.
- `thumbnail.html` — homepage tile. `assets/` — wordmark lockup + placeholder mark.
- `scraps/` — extracted source page renders (reference only).

**Components** (`components/…`, group "Components")
- `core/` — Button, Card, Chip, Badge
- `navigation/` — NavBar, Tabs, AnnouncementBar
- `product/` — PromptBar, CanvasNode

**Foundations** — specimen cards in `guidelines/` (groups: Colors, Type, Spacing, Brand).

**UI kits** (`ui_kits/…`)
- `website/` — interactive recreation of the Melius marketing site (hero + use-case canvas demo + persona showcase).

_Intentional additions:_ none beyond what the source defines. Generic UI arrow/menu glyphs are drawn inline; Lucide is offered as a substitute icon set (flagged above).

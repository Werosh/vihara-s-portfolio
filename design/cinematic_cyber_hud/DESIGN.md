---
name: Cinematic Cyber-HUD
colors:
  surface: '#10131c'
  surface-dim: '#10131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#e0e2ee'
  on-surface-variant: '#bfc7d5'
  inverse-surface: '#e0e2ee'
  inverse-on-surface: '#2d303a'
  outline: '#89919e'
  outline-variant: '#3f4753'
  surface-tint: '#9fcaff'
  primary: '#9fcaff'
  on-primary: '#003259'
  primary-container: '#1e9bff'
  on-primary-container: '#003158'
  inverse-primary: '#0061a5'
  secondary: '#ffb2be'
  on-secondary: '#660025'
  secondary-container: '#d70357'
  on-secondary-container: '#ffeced'
  tertiary: '#adc6ff'
  on-tertiary: '#002e69'
  tertiary-container: '#6796ef'
  on-tertiary-container: '#002d67'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#9fcaff'
  on-primary-fixed: '#001d37'
  on-primary-fixed-variant: '#00497e'
  secondary-fixed: '#ffd9de'
  secondary-fixed-dim: '#ffb2be'
  on-secondary-fixed: '#400014'
  on-secondary-fixed-variant: '#900038'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004493'
  background: '#10131c'
  on-background: '#e0e2ee'
  surface-variant: '#31353e'
typography:
  headline-display:
    fontFamily: Bebas Neue
    fontSize: 5rem
    fontWeight: '400'
    lineHeight: 5rem
    letterSpacing: 0.08em
  headline-display-mobile:
    fontFamily: Bebas Neue
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: 3.2rem
    letterSpacing: 0.06em
  headline-xl:
    fontFamily: Bebas Neue
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: 3.75rem
    letterSpacing: 0.06em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Bebas Neue
    fontSize: 1.5rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Montserrat
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Montserrat
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Montserrat
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-lg:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: 1.25rem
    letterSpacing: 0.12em
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.14em
  label-sm:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.16em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1.25rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system channels an immersive, high-tech, cinematic video-game HUD (Heads-Up Display) aesthetic tailored for an Artificial Intelligence undergraduate and freelance graphic designer. It fuses the precision of futuristic terminal interfaces with the theatrical drama of AAA game menu screens.

The visual mood evokes focus, technical prowess, elite creative execution, and ambient mystery. Deep cosmic abyss tones establish an infinite digital canvas, punctured by razor-sharp typography, frosted glass telemetry panels, and controlled bioluminescent energy glows.

Stylistically, this system is a synthesis of:
- **Cinematic Dark Minimalist HUD**: Clean structural hierarchy, spacious tactical layout grids, micro-tracked labels, and precise monograms.
- **Glassmorphism & Luminous Depth**: Translucent frosted panels with soft cyan perimeter refraction resting over ambient radial gradients.
- **Gamer UI Metaphors**: Pill segment navigators, tactical status readouts, categorical stat rows, and subtle asymmetric accent shapes.

## Colors

The palette operates under a strict dark-mode-native hierarchy, balancing void-like obsidian backgrounds against piercing electric light.

### Palette Architecture
- **Canvas Obsidian (`#050810`)**: The primary deep void background, absorbing ambient light and grounding all high-contrast UI assets.
- **Electric Cyan Primary (`#1E9BFF`)**: The focal telemetry hue. Used for active navigation pills, cursor focus rings, glowing perimeter borders, and key interactive triggers.
- **Crimson / Rose Secondary (`#E91E63` / `#C2185B`)**: High-drama warm contrast. Reserved for geometric structural backplates behind key subject photography, character cutouts, and specialized accent emblems.
- **Deep Marine Glow (`#0A4DA2`)**: Secondary atmospheric glow source; used in soft radial blurs behind content cards to project dimensionality without decreasing text contrast.
- **Silver-White Textures (`#FFFFFF`, `#E2E8F0`, `#94A3B8`)**: High-legibility monochrome hierarchy. Pure `#FFFFFF` and `#C9CED6` command primary titling, while `#94A3B8` provides secondary technical readouts.

## Typography

The type system blends authoritative, tall condensed headers with crisp, hyper-readable geometric sans-serif body and micro-labels.

### Typographic Roles
- **Headlines (`Bebas Neue`)**: Display-first, condensed, uppercase proportions simulate tactical mission titles and AAA game interface screens. Always set in uppercase with subtle letter-spacing to prevent crowding.
- **Body (`Montserrat`)**: Clean, balanced geometric sans-serif that ensures effortless reading across bio blocks, case study summaries, and skill manifests.
- **Labels & Micro-copy (`Inter`)**: All-caps, wide-tracked utilitarian typography used for system telemetry, breadcrumbs, tags, metric counters, and navigation pills.

## Layout & Spacing

The layout is structured around an ultra-clean 12-column fluid grid system bounded by tactical margins.

### Screen Adaptability
- **Desktop (1024px and above)**: Full 12-column matrix with 2rem (32px) gutters and 4rem (64px) outer margins. Multi-column cards and split profile-hero compositions showcase ample cinematic negative space.
- **Tablet (768px - 1023px)**: 8-column layout with 1.5rem (24px) gutters and 2rem (32px) outer margins. Content groups reflow into dynamic 4-column pairing grids.
- **Mobile (Below 768px)**: 4-column single-axis stack with 1rem (16px) gutters and 1.25rem (20px) outer margins. The floating pill navigation docks with horizontal scroll or auto-adjusting condensed chips.

### Vertical Rhythm
A base 8px increment dictates component heights and stack gaps. Major view transitions utilize `space-3xl` (96px) to maintain the cinematic, episodic pace of game chapter transitions.

## Elevation & Depth

Visual hierarchy is maintained via three distinct depth tiers using glassmorphism, glowing radial backdrops, and luminous stroke accents:

### Tiers of Depth
1. **Abyss Layer (Base `0`)**: The foundational `#050810` canvas. Populated by static corner vignette gradients and bleeding radial electric blue `#0A4DA2` blooms behind central profile cutouts.
2. **Tactical Glass Layer (Elevation `1`)**: Translucent panels (`rgba(9, 14, 26, 0.65)`) with a `backdrop-blur(16px)` filter. Borders are outlined in subtle translucent cyan (`rgba(30, 155, 255, 0.18)`), creating defined structural cards without opaque weight.
3. **Interactive & Highlight Layer (Elevation `2`)**: Active hover states, interactive modal dialogs, and active navigation pills. Accompanied by electric blue ambient drop glows: `0 0 24px rgba(30, 155, 255, 0.35)` and `0 8px 32px rgba(5, 8, 16, 0.8)`.

Crimson accent slabs (`#E91E63`) are placed directly between the abyss and portrait foregrounds, creating a deliberate cinematic silhouette cutout effect.

## Shapes

The design adopts a hybrid geometric shape vocabulary:
- **Standard UI Cards & Containers**: Follow Level 2 roundedness (8px base, 16px for large surface panels), blending contemporary product design with futuristic UI ergonomics.
- **Interactive Controls & System Pills**: Full pill geometry (`rounded-full` / 9999px) strictly used for navigation bars, status tags, skill capsules, and action buttons.
- **Subject Accent Shapes**: Organic asymmetrically rounded cards or clipped geometric polygons behind profile cutouts, establishing focal art direction.

## Components

### Monogram Brand Mark
- **Visuals**: Circular white emblem in the top-left canvas margin containing the crisp serif/geometric hybrid letters 'RV'.
- **Style**: Encased in an ultra-fine border ring (`rgba(255, 255, 255, 0.3)`), scale 36px x 36px, centered alignment.

### Top Pill Navigation
- **Structure**: Floating, centered capsule navigation container (`rounded-full`) utilizing `backdrop-blur(12px)` and a dark glass background (`rgba(10, 16, 30, 0.75)`).
- **Segments**: `PROFILE | PROJECTS | CONTACT`.
- **States**:
  - *Active Tab*: Solid luminous electric blue pill (`#1E9BFF`) with crisp dark text (`#050810`) or bright white (`#FFFFFF`) with subtle cyan outer glow.
  - *Inactive Tab*: Semi-transparent silver-slate text (`#94A3B8`), transitioning to `#FFFFFF` on hover with no background.

### Glassmorphic Project & Profile Cards
- **Construction**: Dark translucent fill (`rgba(9, 15, 28, 0.6)`) with `1px` continuous border in `rgba(30, 155, 255, 0.2)`.
- **Hover Interaction**: Border opacity increases to `rgba(30, 155, 255, 0.6)` accompanied by a subtle upward shift (-2px) and faint electric cyan outer glow.

### Buttons & Action Triggers
- **Primary Action**: Pill-shaped button filled with Electric Blue (`#1E9BFF`), high-contrast dark label, bold condensed text, and a glowing hover shadow (`0 0 20px rgba(30, 155, 255, 0.4)`).
- **Secondary / HUD Action**: Ghost pill with a 1px border (`#C9CED6`), uppercase tracked label, shifting to filled translucent cyan on interaction.

### Skill Badges & Software Chips
- **Geometry**: Compact rounded-md or circular icon pods nested inside glass frames.
- **Labels**: Micro uppercase Inter labels underneath each node, indicating specialized proficiency (e.g., AI/ML tools, Adobe Creative Suite, 3D/VFX).

### Project Showcase Gallery Grid
- **Composition**: Asymmetric masonry or modular grid with deep black image letterboxing.
- **Overlays**: Title reveal on hover using condensed Bebas Neue uppercase headers paired with electric cyan category badges.
# Design System Document

## 1. Overview & Creative North Star: "The Radiant Sanctuary"

This design system is built to transform a digital interface into a "Radiant Sanctuary"—a space that feels as supportive as a community home and as dependable as a lifelong institution. We reject the cold, rigid "corporate grid" in favor of an **Editorial Humanitarian** aesthetic. 

The system utilizes high-contrast typography scales, intentional asymmetry, and layered depth to evoke a sense of warmth and professional care. We move beyond flat design by treating the screen as a tactile environment where elements float, overlap, and breathe, reflecting the non-profit's mission of providing shelter, support, and vibrancy.

---

## 2. Colors & Tonal Architecture

Our palette is anchored by a deep, authoritative navy and a supportive, sun-drenched gold. To maintain a premium feel, we strictly govern how these colors interact through "Tonal Layering."

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be created through background color shifts or subtle tonal transitions. A `surface-container-low` section sitting against a `background` provides all the definition required without the "boxiness" of traditional lines.

### Surface Hierarchy
We utilize a physical stacking model. The UI is a series of nested layers:
*   **Base Layer:** `surface` (#fcf9f4) – The wide-open canvas.
*   **Secondary Layer:** `surface-container-low` (#f6f3ee) – For large content blocks.
*   **Component Layer:** `surface-container-highest` (#e5e2dd) – For interactive cards or highlighted content.

### The "Glass & Signature Texture" Rule
*   **Glassmorphism:** For floating navigation or modal overlays, use semi-transparent `surface` colors with a 20px backdrop-blur. This ensures the UI feels integrated and modern.
*   **Signature Gradients:** To give the "gold" vibrancy visual soul, use a subtle linear gradient on primary CTAs (from `secondary` to `secondary_container`). This prevents the orange from feeling "flat" or "cheap."

---

## 3. Typography: Editorial Authority

We use **Plus Jakarta Sans** exclusively. Its geometric clarity combined with soft apertures makes it the perfect vehicle for a modern non-profit.

*   **Display (lg/md):** Reserved for high-impact mission statements. Use `primary` (#001229) with tight letter-spacing (-0.02em) to create a bold, editorial presence.
*   **Headlines:** Used to break up content. These should feel rhythmic and approachable.
*   **Body (lg/md):** Set in `on-surface-variant` (#43474e) for long-form reading. The slightly reduced contrast vs. pure black improves readability and warmth.
*   **Labels:** Use `on-secondary-container` for small, high-visibility metadata.

**The Hierarchy Goal:** Use a "Size Leap" strategy. Jump from a `display-lg` headline directly to a `body-md` description to create white space and visual tension—avoiding the "medium-size-everything" trap of generic websites.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are replaced by **Ambient Luminosity**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **Ambient Shadows:** If a floating effect is required (e.g., for a "Donate" FAB), use a large 40px blur with only 6% opacity. The shadow color should be tinted with `primary` rather than grey, mimicking natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` at 15% opacity. Never use 100% opaque borders.
*   **Roundedness:** All containers and buttons must adhere to `ROUND_EIGHT` (0.5rem), creating an approachable, soft-touch interface that feels safe and community-focused.

---

## 5. Components

### Buttons
*   **Primary:** A gradient-filled container (`secondary` to `secondary_container`) with `on-secondary` text. Rounded-full for high-action items, or `ROUND_EIGHT` for standard forms.
*   **Tertiary:** No background, no border. Use `primary` text with a subtle underline or a slight `surface-container-high` hover state.

### Cards & Lists
*   **Anti-Divider Policy:** Forbid the use of divider lines. Separate list items using vertical spacing (Token `4` or `5`) or alternating background tints between `surface` and `surface-container-lowest`.
*   **Card Style:** Use `surface-container-low` with no border and a soft ambient shadow.

### Inputs & Forms
*   **Fields:** Use `surface-container-highest` for the input background to give a "recessed" look. The label should sit above in `label-md` using the `primary` color.
*   **States:** Error states must use `error` (#ba1a1a) text but should never use a heavy red border; instead, use a 2px bottom-heavy "Ghost Border" in the error color.

### Signature Component: The "Community Spotlight" Card
An asymmetrical card where a large rounded image (Token `xl`) overlaps a `surface-container` block, creating a layered, editorial look that feels custom-built rather than templated.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a functional element. Allow `display-lg` text to have significant "breathing room" (Token `12` or `16`).
*   **DO** mix the navy (`primary`) and gold (`secondary`) with the warm neutrals (`surface`) to ensure the brand feels "human" rather than "nautical."
*   **DO** use asymmetrical layouts where text is left-aligned and images are right-anchored with varied border-radius values.

### Don't
*   **DON'T** use 1px black or grey borders. They break the "Radiant Sanctuary" illusion.
*   **DON'T** use pure black (#000000) for text. Always use the navy `primary` or `on-surface-variant` to maintain warmth.
*   **DON'T** crowd the interface. If a screen feels busy, increase the spacing tokens instead of adding more lines or containers.
*   **DON'T** use standard "drop shadows." If it looks like a default Photoshop shadow, it’s too heavy.
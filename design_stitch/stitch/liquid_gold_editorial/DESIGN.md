---
name: Liquid Gold Editorial
colors:
  surface: '#131412'
  surface-dim: '#131412'
  surface-bright: '#393937'
  surface-container-lowest: '#0e0e0d'
  surface-container-low: '#1b1c1a'
  surface-container: '#1f201e'
  surface-container-high: '#2a2a28'
  surface-container-highest: '#343533'
  on-surface: '#e4e2de'
  on-surface-variant: '#d6c4ac'
  inverse-surface: '#e4e2de'
  inverse-on-surface: '#30312e'
  outline: '#9e8e78'
  outline-variant: '#514532'
  surface-tint: '#ffba35'
  primary: '#ffd89c'
  on-primary: '#422c00'
  primary-container: '#ffb400'
  on-primary-container: '#6b4900'
  inverse-primary: '#7e5700'
  secondary: '#e7bf99'
  on-secondary: '#432b10'
  secondary-container: '#5f4426'
  on-secondary-container: '#d8b18c'
  tertiary: '#e0dddc'
  on-tertiary: '#313030'
  tertiary-container: '#c4c1c1'
  on-tertiary-container: '#504f4f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdeac'
  primary-fixed-dim: '#ffba35'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#5f4100'
  secondary-fixed: '#ffdcbc'
  secondary-fixed-dim: '#e7bf99'
  on-secondary-fixed: '#2b1701'
  on-secondary-fixed-variant: '#5c4124'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131412'
  on-background: '#e4e2de'
  surface-variant: '#343533'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 120px
  container-padding: 24px
  grid-gutter: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for a premium, boutique honey brand that positions its products as artisanal treasures. The brand personality is sophisticated, biological, and exclusive—moving away from traditional rustic apiary aesthetics toward a high-end editorial luxury feel.

The visual style is a fusion of **Editorial Minimalism** and **Organic Glassmorphism**. It utilizes heavy whitespace to create a sense of breathing room and "gallery" prestige. This is punctuated by fluid, organic masks that mimic the viscosity of dripping honey, breaking the rigid grid to evoke a sensory, tactile experience. Glassmorphic layers provide depth and a contemporary edge, ensuring the brand feels technologically modern while celebrating its natural origins.

## Colors

The palette is anchored by **Rich Charcoal** (#1A1A1A) to establish a baseline of luxury and depth. This is contrasted by **Cream** (#FDFBF7), used for high-end editorial backgrounds and readability.

**Vibrant Amber** (#FFB400) serves as the primary accent, used sparingly to highlight liquid textures, CTA buttons, and critical focus points. **Deep Honey-comb Brown** (#4B3216) acts as a bridge between the charcoal and amber, providing warmth in gradients and secondary backgrounds. The default mode is a mix of high-contrast "Dark Mode" sections for storytelling and "Light Mode" sections for product details, creating a rhythmic visual flow.

## Typography

This design system employs a high-contrast typographic pairing. **Playfair Display** provides an elegant, modern serif voice for headlines, echoing the aesthetics of luxury fashion magazines. 

For body copy, **Manrope** offers a balanced, professional, and modern sans-serif experience that ensures clarity and accessibility. Technical data, product specifications, and small metadata utilize **JetBrains Mono** to inject a "technical/scientific" quality, suggesting the precision of the honey-making process and lab-tested quality.

## Layout & Spacing

The layout follows a **12-column Fluid Grid** with generous margins to emphasize the editorial feel. Section transitions are expansive (120px+), using negative space to allow the high-quality imagery and organic "honey masks" to dominate.

Content should reflow seamlessly from a single-column layout on mobile (using `headline-xl-mobile`) to a complex, multi-layered composition on desktop. Grid alignment is occasionally broken by "floating" elements or dripping masks that overlap multiple sections, creating a dynamic, unconstrained vertical flow.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layers** rather than heavy shadows. 

1.  **Base Layer:** Solid Charcoal or Cream surfaces.
2.  **Glass Layer:** Semi-transparent panels with a 20px backdrop blur and a subtle 1px inner stroke (White at 10% opacity) to catch the "light."
3.  **Floating Elements:** Images and CTAs use extremely soft, large-radius ambient shadows (Amber-tinted at 5% opacity) to suggest they are suspended in a viscous medium.
4.  **Fluid Masks:** Elements masked in organic, dripping shapes act as windows into secondary photographic layers.

## Shapes

The shape language is primarily organic. While standard UI components (inputs, small cards) follow a **Rounded** profile (0.5rem), larger containers and image masks utilize custom SVG paths that mimic liquid behavior—blobs, drips, and soft, asymmetrical curves. This "imperfection" in the shapes reflects the natural, non-industrial nature of the product.

## Components

### Buttons
Primary buttons are pill-shaped with a vibrant Amber background and charcoal text. Secondary buttons use the "glass" style: a blurred background with a fine white border and serif labels.

### Cards & Glass Panels
Cards should not have visible borders. Instead, use a backdrop-filter blur (15-25px) and a subtle gradient fill (Top: 5% White, Bottom: 2% White) to create the "honey-glass" effect.

### Input Fields & Controls
Inputs use a minimal under-line or a very soft, low-contrast ghost border. Selection states should glow with a soft Amber outer shadow.

### Organic Masks
Images must be occasionally contained within fluid "blob" masks. These should be animated with subtle, slow-motion CSS transforms to simulate liquid movement.

### Micro-interactions
Transitions between pages should feel "heavy" and smooth. Hovering over a product should trigger a subtle expansion of its organic mask, as if the honey is spreading.
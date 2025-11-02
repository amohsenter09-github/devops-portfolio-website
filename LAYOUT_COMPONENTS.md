# Layout Components Guide

## ✅ Custom Layout Components (Recommended)

I've created a set of layout components specifically for consistent centralization and spacing across your site. These are better than external libraries because they're:
- Tailored to your design system
- Lightweight (no extra dependencies)
- Type-safe with TypeScript
- Consistent with your existing Tailwind setup

### Components Created

1. **`ArticleLayout`** - For blog posts and articles
2. **`Section`** - For consistent section spacing with optional dividers
3. **`CenteredContainer`** - Enhanced container with better options
4. **`Container`** - Updated existing container with centerContent option

### Usage Examples

#### Blog Post Example (Using ArticleLayout + Section)
```tsx
import { ArticleLayout, Section } from "@/components/Layout";

export default function BlogPost() {
  return (
    <ArticleLayout maxWidth="3xl" spacing="relaxed">
      <header>
        <h1>Article Title</h1>
        <p>January 25, 2024</p>
      </header>

      <Section spacing="xl" withDivider animate>
        <h2>The Challenge</h2>
        <p>Content here...</p>
      </Section>

      <Section spacing="xl" withDivider animate>
        <h2>My Solution</h2>
        <p>Content here...</p>
      </Section>
    </ArticleLayout>
  );
}
```

#### General Page Example (Using CenteredContainer)
```tsx
import { CenteredContainer } from "@/components/Layout";

export default function Page() {
  return (
    <main className="py-20">
      <CenteredContainer maxWidth="4xl" padding="md">
        <h1>Page Title</h1>
        <p>Content here...</p>
      </CenteredContainer>
    </main>
  );
}
```

---

## 📚 Alternative Library Solutions

If you prefer using external libraries, here are some options:

### 1. **Container Queries** (for responsive layouts)
```bash
npm install @container-queries/react
```
Use when you need layouts that respond to container size, not just viewport.

### 2. **CSS Grid Libraries**
- **`react-grid-layout`** - For draggable/resizable grids (not ideal for content layouts)
- **`react-grid-system`** - Bootstrap-like grid system

### 3. **Component Libraries with Layout Primitives**
Since you already have Radix UI:
- Use Radix UI's layout patterns (they don't have a dedicated layout component, but their patterns work well)

### 4. **Layout Utility Libraries**
- **`@stitches/react`** - CSS-in-JS with layout utilities (adds complexity)
- **`emotion`** - Similar to stitches

### 5. **Full-Featured UI Libraries**
- **`chakra-ui`** - Has Box, Container, Stack components (but large bundle size)
- **`mui` (Material-UI)** - Has Container, Grid components (very large bundle)

---

## 🎯 Recommendation

**Use the custom layout components** I created. They're:
- ✅ Already integrated with your codebase
- ✅ Use your existing Tailwind setup
- ✅ Type-safe and consistent
- ✅ No additional dependencies
- ✅ Lightweight and performant

The layout components ensure:
- Consistent max-widths across pages
- Proper centralization (`mx-auto`)
- Standardized spacing patterns
- Reusable divider animations
- Type-safe props

---

## Quick Migration Example

**Before:**
```tsx
<main className="bg-white min-h-screen py-20 md:py-32">
  <article className="max-w-3xl mx-auto px-6 sm:px-8">
    <section className="mb-24 md:mb-32">
      {/* content */}
    </section>
    <div className="h-px bg-gradient-to-r..."></div>
    <section className="mb-24 md:mb-32">
      {/* content */}
    </section>
  </article>
</main>
```

**After:**
```tsx
import { ArticleLayout, Section } from "@/components/Layout";

<ArticleLayout maxWidth="3xl" spacing="relaxed">
  <Section spacing="xl" withDivider animate>
    {/* content */}
  </Section>
  <Section spacing="xl" withDivider animate>
    {/* content */}
  </Section>
</ArticleLayout>
```

Much cleaner and more maintainable! 🎉


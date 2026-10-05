/**
 * Design Tokens for Abogados Asturias demo
 * Clean, restrained, agency demo style (<10% accent)
 */

export const tokens = {
  colors: {
    bg: "#ffffff",
    surface: "#fafafa",
    ink: "#111111",
    inkMuted: "#52525b", // zinc-600
    inkSubtle: "#71717a", // zinc-500
    line: "#e4e4e7", // zinc-200
    lineLight: "#f4f4f5", // zinc-100
    accent: "#2F3B69",
    accentHover: "#232D50",
    accentLight: "#F0F3F9",
    accentBorder: "rgba(47, 59, 105, 0.15)",
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: "text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]",
    h2: "text-2xl lg:text-3xl font-semibold tracking-tight text-[#111111]",
    h3: "text-xl font-semibold text-[#111111]",
    body: "text-base text-zinc-600 leading-relaxed",
    small: "text-sm text-zinc-500",
  },
  spacing: {
    section: "py-16 lg:py-24",
    sectionCompact: "py-12 lg:py-16",
    container: "mx-auto max-w-6xl px-6",
  },
  radius: {
    card: "rounded-2xl",
    button: "rounded-lg",
    photo: "rounded-2xl",
  },
} as const;

export default tokens;

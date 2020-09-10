const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{js, mdx, jsx}"],
    options: {
      whitelist: [
        "h1",
        "h2",
        "h3",
        "p",
        "blockquote",
        "strong",
        "article",
        "div",
        "ul",
        "li",
      ],
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("@tailwindcss/ui")],
}

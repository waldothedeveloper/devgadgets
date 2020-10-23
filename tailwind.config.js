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
      typography: {
        default: {
          css: {
            img: {
              marginTop: `0.15rem`,
              marginBottom: `0.15rem`,
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
}

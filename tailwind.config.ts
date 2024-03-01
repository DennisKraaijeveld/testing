import defaultTheme from "tailwindcss/defaultTheme.js"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "var(--font-dark)",
            p: {
              letterSpacing: "0.025em",
            },
            a: {
              color: "var(--font-dark)",
              "&:hover": {
                color: "var(--font-dark)",
              },
            },
            h1: {
              color: "var(--font-dark)",
              fontWeight: 500,
              fontSize: "3.75rem",
              lineHeight: "1.375",
            },
            h2: {
              color: "var(--font-dark)",
              fontWeight: 500,
              fontSize: "3rem",
              lineHeight: "1.375",
            },
            h3: {
              color: "var(--font-dark)",
              fontWeight: 500,
              fontSize: "2.5rem",
              lineHeight: "1.375",
            },
            h4: {
              color: "var(--font-dark)",
              fontWeight: 500,
              fontSize: "2.25rem",
              lineHeight: "1.375",
            },
            h5: {
              color: "var(--font-dark)",
              fontWeight: 500,
              fontSize: "2rem",
              lineHeight: "1.375",
            },
            h6: {
              color: "var(--font-dark)",
              fontWeight: 500,
              fontSize: "1.75rem",
              lineHeight: "1.375",
            },
            strong: {
              color: "var(--font-dark)",
            },
            blockquote: {
              color: "var(--font-dark)",
            },
            code: {
              color: "var(--font-dark)",
            },
            figcaption: {
              color: "var(--font-dark)",
            },
            hr: {
              borderColor: "var(--font-dark)",
            },
            ol: {
              color: "var(--font-dark)",
            },
            ul: {
              color: "var(--font-dark)",
            },
            li: {
              color: "var(--font-dark)",
            },
            pre: {
              color: "var(--font-dark)",
            },
            thead: {
              color: "var(--font-dark)",
            },
            tbody: {
              color: "var(--font-dark)",
            },
            table: {
              color: "var(--font-dark)",
            },
            tr: {
              color: "var(--font-dark)",
            },
            th: {
              color: "var(--font-dark)",
            },
            td: {
              color: "var(--font-dark)",
            },
          },
        },
      },
      fontFamily: {
        header: ["var(--font-header)", ...defaultTheme.fontFamily.serif],
        body: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        subtitle: ["var(--font-subtitle)", ...defaultTheme.fontFamily.sans],
        signed: ["var(--font-signed)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-color))",
          light: "hsl(var(--primary-color-light))",
          grey: "hsl(var(--grey))",
          "grey-dark": "hsl(var(--grey-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          accent: "hsl(var(--accent))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        content: {
          DEFAULT: "hsl(var(--font-dark))",
          body: "hsl(var(--font-body))",
          light: "hsl(var(--font-light))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

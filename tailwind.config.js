/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
      colors: {
        background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))', input: 'hsl(var(--input))', ring: 'hsl(var(--ring))',
        novair: { obsidian: '#070708', vapor: '#16161A', crystalline: '#F4F4F9', bloom: '#C8CCD4', amber: '#1A1612' },
      },
      fontFamily: {
        heading: ['var(--font-heading)'], body: ['var(--font-body)'],
        display: ['var(--font-display)'], mono: ['var(--font-mono)']
      },
      letterSpacing: { 'premium': '0.15em', 'cinematic': '-0.04em', 'ultra': '0.3em' },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.15), transparent)',
        'vapor-glow': 'radial-gradient(circle, rgba(200, 200, 220, 0.05) 0%, transparent 70%)',
      },
      keyframes: {
        'refraction': { '0%, 100%': { filter: 'brightness(1) contrast(1)' }, '50%': { filter: 'brightness(1.2) contrast(1.1)' } },
        'float': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        'shimmer': { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        'pulse-glow': { '0%, 100%': { boxShadow: '0 0 20px rgba(200, 204, 212, 0.1)' }, '50%': { boxShadow: '0 0 40px rgba(200, 204, 212, 0.3)' } },
      },
      animation: {
        'refraction-pulse': 'refraction 8s ease-in-out infinite', 'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite', 'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

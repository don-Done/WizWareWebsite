import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				wizware: {
					gold: '#FFD700',
					'dark-gold': '#B8860B',
					purple: '#6A0DAD',
					'dark-purple': '#5B21B6',
					teal: '#00CED1',
					'dark-teal': '#0369A1',
					black: '#0D0D2B',
					'dark-black': '#050505',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)' },
					'50%': { opacity: '0.7', boxShadow: '0 0 25px rgba(255, 215, 0, 0.8)' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'magic-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				'magic-reveal': {
					'0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
					'100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' },
				},
				'magic-particle-flow': {
					'0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'magic-fade-in': 'magic-fade-in 0.8s ease-out',
				'magic-reveal': 'magic-reveal 1.2s ease-in-out',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'magic-particle-flow': 'magic-particle-flow 4s ease-out infinite',
			},
			fontFamily: {
				cinzel: ['Cinzel', 'serif'],
				quicksand: ['Quicksand', 'sans-serif'],
				code: ['Fira Code', 'monospace'],
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(to bottom, rgba(13, 13, 43, 0.95), rgba(5, 5, 5, 1)), url("/lovable-uploads/81bb237b-2c7c-49f0-b707-a6fe996790d4.png")',
				'cosmic-gradient': 'linear-gradient(135deg, rgba(106, 13, 173, 0.3), rgba(0, 206, 209, 0.3))',
				'magic-gradient': 'linear-gradient(to right, #FFD700, #00CED1)',
				'cosmos': 'radial-gradient(circle at center, #0D0D2B 0%, #050505 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

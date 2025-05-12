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
        background: '#F8F8F8', // Nền chính sáng
        foreground: '#1F2937', // Chữ chính trên nền sáng (Tailwind gray-800)

        primary: {
          DEFAULT: '#416628', // MÀU CHỦ ĐẠO MỚI
          dark: '#304d1f',    // Biến thể tối hơn của primary (cần điều chỉnh nếu muốn)
          foreground: '#FFFFFF' // Chữ trắng trên nền primary
        },
        secondary: {
          DEFAULT: '#6B7280', // Ví dụ: Tailwind gray-500 làm màu phụ
          foreground: '#FFFFFF' // Chữ trắng trên nền secondary này
        },
        accent: {
          DEFAULT: '#5A8C3D', // Ví dụ: một biến thể sáng hơn của primary làm accent
          foreground: '#FFFFFF' // Chữ trắng trên nền accent này
        },

        // Định nghĩa các màu cụ thể nếu muốn dùng trực tiếp
        'brand-green-primary': '#416628',
        'brand-green-primary-dark': '#304d1f',
        'brand-green-accent': '#5A8C3D',
        'brand-off-white': '#F8F8F8',
        'brand-text-dark': '#1F2937',

        // Cập nhật các màu hệ thống
        // HSL values should be derived from your chosen HEX codes
        border: 'hsl(var(--border))', // Ví dụ: một màu xám nhạt (HSL của #D1D5DB - gray-300)
        input: 'hsl(var(--input))',   // Tương tự
        ring: '#5A8C3D', // Màu ring có thể là màu accent hoặc primary

        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Giữ lại màu cảnh báo hiện tại (thường là đỏ)
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: '#E5E7EB', // Ví dụ: Tailwind gray-200 làm muted background
          foreground: '#374151'      // Ví dụ: Tailwind gray-700 cho chữ trên nền muted
        },
        popover: {
          DEFAULT: '#FFFFFF', // Nền popover (trắng)
          foreground: '#1F2937', // Chữ trong popover (tối)
        },
        card: {
          DEFAULT: '#FFFFFF', // Nền card (trắng)
          foreground: '#1F2937', // Chữ trong card (tối)
        },
        light: { // Nếu bạn còn sử dụng 'light'
          DEFAULT: '#F8F8F8',
          foreground: '#1F2937'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
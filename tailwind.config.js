/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      // default/main body font
      sans: ['"Work Sans"', 'sans-serif'],
      // heading font for hero titles, section titles, and RTE (Rich Text Editor) elements
      heading: ['Literata', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
      primary: {
        DEFAULT: '#8BB6C1',
        50: '#FFFFFF',
        100: '#F5F9FA',
        200: '#DBE8EC',
        300: '#C0D7DD',
        400: '#A6C7CF',
        500: '#8BB6C1',
        600: '#669FAD',
        700: '#4D828F',
        800: '#39616B',
        900: '#253F46',
      },
      secondary: {
        DEFAULT: '#9BC4B8',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#E8F1EF',
        300: '#CEE2DC',
        400: '#B5D3CA',
        500: '#9BC4B8',
        600: '#78AF9F',
        700: '#599684',
        800: '#447365',
        900: '#2F5046',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '.1',
      15: '.15',
      20: '.2',
      25: '.25',
      30: '.3',
      35: '.35',
      40: '.4',
      45: '.45',
      50: '.5',
      55: '.55',
      60: '.6',
      65: '.65',
      70: '.7',
      75: '.75',
      80: '.8',
      85: '.85',
      90: '.9',
      95: '.95',
      100: '1',
    },
    extend: {
      maxWidth: {
        prose: '75ch',
      },
      scale: {
        flipped: '-1',
      },
      zIndex: {
        1: '1',
        100: '100',
        1000: '1000',
        10000: '10000',
      },
      textColor: {
        header: {
          color: 'var(--text-header-color)',
          'hover-color': 'var(--text-header-hover-color)',
          'button-color': 'var(--button-text-color)'
        },
        button: {
          'primary-text': 'var(--button-text-color)',
        },
        section: {
          'hero-title': 'var(--text-hero-title)',
          'hero-subtitle': 'var(--text-hero-subtitle)',
          'hero-body': 'var(--text-hero-body)',
          'cta-title': 'var(--text-cta-title)',
          'cta-subtitle': 'var(--text-cta-subtitle)',
          'cta-body': 'var(--text-cta-body)',
          'email-signup-title': 'var(--text-email-signup-title)',
          'email-signup-body': 'var(--text-email-signup-body)',
          'footer-title': 'var(--text-footer-title)',
          'footer-body': 'var(--text-footer-body)',
          'title': 'var(--text-section-title)',
          'subtitle': 'var(--text-section-subtitle)',
          'body': 'var(--text-section-body)',
          button: {
            'hero-primary': 'var(--button-primary-hero-text)',
            'hero-secondary': 'var(--button-secondary-hero-text)',
            'hero-primary-hover': 'var(--button-primary-hero-text-hover)',
            'cta': 'var(--button-cta-text)',
            'email-signup': 'var(--button-email-signup-text)',
            'footer': 'var(--button-footer-text)',
            'footer-secondary': 'var(--button-footer-secondary-text)',
            'footer-secondary-hover': 'var(--button-footer-secondary-text-hover)',
            'primary': 'var(--button-section-primary-text)',
            'primary-hover': 'var(--button-section-primary-text-hover)',
            'secondary': 'var(--button-section-secondary-text)',
            'secondary-hover': 'var(--button-section-secondary-text-hover)'
          }
        },
        footer: colors.gray[800]
      },
      borderColor: {
        section: {
          button: {
            'hero-primary': 'var(--button-primary-hero-border)',
            'hero-primary-hover': 'var(--button-primary-hero-border-hover)',
            'hero-secondary': 'var(--button-secondary-hero-border)',
            'hero-secondary-hover': 'var(--button-secondary-hero-border-hover)',
            'cta': 'var(--button-cta-border)',
            'cta-hover': 'var(--button-cta-border-hover)',
            'email-signup': 'var(--button-email-signup-border)',
            'email-signup-hover': 'var(--button-email-signup-border-hover)',
            'footer': 'var(--button-footer-border)',
            'footer-hover': 'var(--button-footer-border-hover)',
            'footer-secondary': 'var(--button-footer-secondary-border)',
            'footer-secondary-hover': 'var(--button-footer-secondary-border-hover)',
            'primary': 'var(--button-section-primary-border)',
            'primary-hover': 'var(--button-section-primary-border-hover)',
            'secondary': 'var(--button-section-secondary-border)',
            'secondary-hover': 'var(--button-section-secondary-border-hover)'
          }
        }
      },
      backgroundColor: {
        header: {
          fill: 'var(--fill-color)',
        },
        button: {
          'primary-fill': 'var(--button-fill-color)',
          'primary-hover': 'var(--button-hover-color)',
        },
        section: {
          button: {
            'hero-primary': 'var(--button-primary-hero-background)',
            'hero-primary-hover': 'var(--button-primary-hero-background-hover)',
            'hero-secondary': 'var(--button-secondary-hero-background)',
            'hero-secondary-hover': 'var(--button-secondary-hero-background-hover)',
            'cta': 'var(--button-cta-background)',
            'cta-hover': 'var(--button-cta-background-hover)',
            'email-signup': 'var(--button-email-signup-background)',
            'email-signup-hover': 'var(--button-email-signup-background-hover)',
            'footer': 'var(--button-footer-background)',
            'footer-hover': 'var(--button-footer-background-hover)',
            'footer-secondary': 'var(--button-footer-secondary-background)',
            'footer-secondary-hover': 'var(--button-footer-secondary-background-hover)',
            'primary': 'var(--button-section-primary-background)',
            'primary-hover': 'var(--button-section-primary-background-hover)',
            'secondary': 'var(--button-section-secondary-background)',
            'secondary-hover': 'var(--button-section-secondary-background-hover)'
          }
        },
        footer: colors.gray[800]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'max-width': '75ch',
            '--tw-prose-links': theme('colors.primary[700]'),
            a: {
              'font-weight': '600',
            },
            'a:hover': {
              color: theme('colors.primary[600]'),
            },
            h1: {
              'font-family': '"Literata", serif',
              'font-weight': '600',
            },
            h2: {
              'font-family': '"Literata", serif',
              'font-weight': '500',
            },
            h3: {
              'font-family': '"Literata", serif',
              'font-weight': '500',
            },
            h4: {
              'font-family': '"Literata", serif',
              'font-weight': '500',
            },
          },
        },
        primary: {
          css: {
            '--tw-prose-body': theme('colors.gray[800]'),
            '--tw-prose-headings': theme('colors.primary[900]'),
            '--tw-prose-lead': theme('colors.primary[700]'),
            '--tw-prose-links': theme('colors.primary[900]'),
            '--tw-prose-bold': theme('colors.primary[900]'),
            '--tw-prose-counters': theme('colors.primary[600]'),
            '--tw-prose-bullets': theme('colors.gray[900]'),
            '--tw-prose-hr': theme('colors.primary[300]'),
            '--tw-prose-quotes': theme('colors.primary[900]'),
            '--tw-prose-quote-borders': theme('colors.primary[300]'),
            '--tw-prose-captions': theme('colors.primary[700]'),
            '--tw-prose-code': theme('colors.primary[900]'),
            '--tw-prose-pre-code': theme('colors.primary[100]'),
            '--tw-prose-pre-bg': theme('colors.primary[900]'),
            '--tw-prose-th-borders': theme('colors.primary[300]'),
            '--tw-prose-td-borders': theme('colors.primary[200]'),
          },
        },
        'primary-invert': {
          css: {
            '--tw-prose-body': theme('colors.primary[100]'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.primary[300]'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.primary[400]'),
            '--tw-prose-bullets': theme('colors.primary[500]'),
            '--tw-prose-hr': theme('colors.primary[800]'),
            '--tw-prose-quotes': theme('colors.primary[100]'),
            '--tw-prose-quote-borders': theme('colors.primary[600]'),
            '--tw-prose-captions': theme('colors.primary[400]'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.primary[300]'),
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-th-borders': theme('colors.primary[900]'),
            '--tw-prose-td-borders': theme('colors.primary[800]'),
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
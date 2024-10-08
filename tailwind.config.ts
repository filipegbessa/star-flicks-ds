import { toRgba } from './utils';

const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    // spacing: {
    //   none: "var(--spacing-none) /* 0px */",
    //   "4xs": "var(--spacing-4xs) /* 8px */",
    //   "2xs": "var(--spacing-2xs) /* 12px */",
    //   xs: "var(--spacing-xs) /* 16px */",
    //   sm: "var(--spacing-sm) /* 20px */",
    //   md: "var(--spacing-md) /* 24px */",
    //   lg: "var(--spacing-lg) /* 32px */",
    //   xl: "var(--spacing-xl) /* 40px */",
    //   "2xl": "var(--spacing-2xl) /* 48px */",
    //   "4xl": "var(--spacing-4xl) /* 56px */",
    //   0: "var(--spacing-none) /* 0px */",
    //   1: "var(--spacing-4xs) /* 8px */",
    //   2: "var(--spacing-2xs) /* 12px */",
    //   3: "var(--spacing-xs) /* 16px */",
    //   4: "var(--spacing-sm) /* 20px */",
    //   5: "var(--spacing-md) /* 24px */",
    //   6: "var(--spacing-lg) /* 32px */",
    //   7: "var(--spacing-xl) /* 40px */",
    //   8: "var(--spacing-2xl) /* 48px */",
    //   9: "var(--spacing-4xl) /* 56px */",
    // },
    // fontSize: {
    //   xs: "var(--text-xs)",
    //   sm: "var(--text-sm)",
    //   md: "var(--text-md)",
    //   lg: "var(--text-lg)",
    //   xl: "var(--text-xl)",
    // },
    fontWeight: {
      thin: 'var(--font-thin)',
      light: 'var(--font-light)',
      normal: 'var(--font-normal)',
      medium: 'var(--font-medium)',
      bold: 'var(--font-bold)',
      black: 'var(--font-black)',
    },
    extend: {
      colors: {
        primary: toRgba('--primary'),
        'primary-hover': toRgba('--primary-hover'),
        'primary-active': toRgba('--primary-active'),
        secondary: toRgba('--secondary'),
        'secondary-hover': toRgba('--secondary-hover'),
        'secondary-active': toRgba('--secondary-active'),
        tertiary: toRgba('--tertiary'),
        'tertiary-hover': toRgba('--tertiary-hover'),
        'tertiary-active': toRgba('--tertiary-active'),
        quaternary: toRgba('--quaternary'),
        hover: toRgba('--hover'),
        click: toRgba('--click'),
        icon: toRgba('--icon'),
        outline: toRgba('--outline'),
        divider: toRgba('--divider'),
        yellow: toRgba('#FFD34E'),
        disabled: toRgba('--text-disabled'),
        success: toRgba('--success'),
        error: toRgba('--error'),
        body: toRgba('--bg-body'),
        alert: {
          error: {
            primary: toRgba('--alert-error-primary'),
            secondary: toRgba('--alert-error-secondary'),
            text: toRgba('--alert-error-text'),
          },
          info: {
            primary: toRgba('--alert-info-primary'),
            secondary: toRgba('--alert-info-secondary'),
            text: toRgba('--alert-info-text'),
          },
          success: {
            primary: toRgba('--alert-success-primary'),
            secondary: toRgba('--alert-success-secondary'),
            text: toRgba('--alert-success-text'),
          },
          warning: {
            primary: toRgba('--alert-warning-primary'),
            secondary: toRgba('--alert-warning-secondary'),
            text: toRgba('--alert-warning-text'),
          },
        },
        whatsapp: {
          primary: toRgba('--whatsapp-primary'),
          'primary-hover': toRgba('--whatsapp-primary-hover'),
          'primary-active': toRgba('--whatsapp-primary-active'),
          secondary: toRgba('--whatsapp-secondary'),
          'secondary-hover': toRgba('--whatsapp-secondary-hover'),
          'secondary-active': toRgba('--whatsapp-secondary-active'),
        },
        input: {
          border: toRgba('--input-border'),
          bg: toRgba('--input-bg'),
        },
      },
      backgroundColor: {
        light: toRgba('--bg-light'),
        dark: toRgba('--bg-dark'),
        disabled: toRgba('--bg-disabled'),
      },
      textColor: {
        contrast: {
          primary: toRgba('--primary-contrast'),
          secondary: toRgba('--secondary-contrast'),
          tertiary: toRgba('--tertiary-contrast'),
          whatsapp: {
            primary: toRgba('--whatsapp-primary-contrast'),
            secondary: toRgba('--whatsapp-secondary-contrast'),
          },
        },
        black: {
          DEFAULT: toRgba('--text-primary'),
        },
        gray: {
          DEFAULT: toRgba('--gray'),
        },
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
      animation: {
        spin: 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

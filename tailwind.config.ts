import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '2r':["2rem",{
        lineHeight:"2rem"
      }],
      '4r':["4rem",{
        lineHeight:"4rem"
      }],
      '6r':["6rem",{
        lineHeight:"6rem"
      }],
      '8r':["8rem",{
        lineHeight:"8rem"
      }],
      "10":["0.625rem",{
        lineHeight:"0.625rem"
      }],
      "20":["1.25rem",{
        lineHeight:"1.25rem"
      }],
      "100":["6.25rem",{
        lineHeight:"6.25rem"
      }],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bblue': '#3266CB',
        'weAre':'#F5F8FF',
        'black75': '#00000075'
      },
      spacing: {
        '128': '32rem',
        '0.75':"0.1875rem",
        "238":"14.875rem",
        "216":"13.5rem",
        "100":"6.25rem",
        "200":"12.5rem",
        "20.1":"1.25rem",
        "10.1":'0.625rem',
        "80":"5rem"
      },
      lineHeight:{
        "8r":'8rem'
      }

    },
  },
  plugins: [],
}
export default config

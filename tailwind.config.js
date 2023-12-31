/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url(/world-map.png)'
      },
      colors: {
        primary: '#590BD8',
        secondary: '#312A4F',
        primarylight: '#DDD5EA',
        grayPrimary: '#BBBFBF',
        graySecondary: '#717171',
        walterwhite: '#F5F5F5',
      },
    },
  },
  plugins: [],
}

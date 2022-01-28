module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  // config daisyui
  daisyui: {
    styled: true,
    themes: [
      'light',
      'halloween',
      'emerald',
      'forest',
      'synthwave',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}

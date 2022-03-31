module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.css',
  ],
    content: [
      './src/**/*.{html,ts}',
      './node_modules/tw-elements/dist/js/**/*.js'
    ],
  theme: {
    fontFamily: {
      'Poppins': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

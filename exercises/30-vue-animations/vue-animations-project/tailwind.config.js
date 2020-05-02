// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {},
  variants: {},
  plugins: [],
};

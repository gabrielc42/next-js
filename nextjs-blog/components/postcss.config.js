// postcss.config.js
export const plugins = {
  tailwindcss: {},
  autoprefixer: {},
};
// tailwind.config.js
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  // For the best performance and to avoid false positives,
  // be as specific as possible with your content configuration.
];

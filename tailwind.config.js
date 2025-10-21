/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      'white': '#F5F7FA',
      'deep-blue': '#0A3D62',
      'light-blue': '#0ABDE3',
      'medium-blue': '#1A84D0',
      'grey': '#809AAE',
      'red': '#EE5253',
      'green': '#31DB3C'

    },
  },
};
export const plugins = [];

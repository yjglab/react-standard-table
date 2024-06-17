/** @type {import('tailwindcss').Config} */

import { tableColumnWidth } from "./src/lib/configs/style";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [...tableColumnWidth.map((width) => `md:w-[${width}%]`)],
  plugins: [],
};

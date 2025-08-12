import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        fill: "var(--fill-color)",
        "text-transparent": "var(--text-transparent-color)",
        primaryDark: "var(--primary-dark-color)",
        secondary: "var(--secondary-color)",
        primary: "var(--primary-color)",
        background: "var(--background-color)",
        text: "var(--text-color)",
      },
    },
  },
};

export default config;

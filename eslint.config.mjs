import js from "@eslint/js";
import * as next from "@next/eslint-plugin-next"; // Ensure it imports correctly

export default [
  js.configs.recommended,
  next.configs.recommended, // Ensure ESLint loads the Next.js config
  {
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];

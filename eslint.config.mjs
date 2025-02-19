import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Convert the array output to a correct format
export default [
  ...compat.extends("next/core-web-vitals"), // Spread the array correctly
  {
    parser: "@babel/eslint-parser", // Explicitly setting the parser
  },
];

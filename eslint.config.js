import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react"; // ✅ import plugin
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react, // ✅ register the plugin
    },
    extends: [
      js.configs.recommended,
      react.configs.recommended, // ✅ add React plugin config
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect", // ✅ auto-detect React version
      },
    },
  },
]);

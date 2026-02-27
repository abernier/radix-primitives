import tseslint from "typescript-eslint";
import workspaces from "eslint-plugin-workspaces";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: { workspaces, "@typescript-eslint": tseslint.plugin },
    rules: {
      "workspaces/require-dependency": "error",
      "workspaces/no-relative-imports": "error",
    },
  },
];

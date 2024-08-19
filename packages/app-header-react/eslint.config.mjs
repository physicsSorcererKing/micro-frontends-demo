import pluginJs from "@eslint/js";
import configPrettier from "eslint-config-prettier";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginNoRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import pluginReact from "eslint-plugin-react";
import pluginReactHook from "eslint-plugin-react-hooks";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // rules for @eslint/js and typescript-eslint
  {
    rules: {
      "no-undef": 0,
      "@typescript-eslint/no-require-imports": 0,
      "no-unused-vars": 0,
      "@typescript-eslint/no-unused-vars": 0,
    },
  },

  // react relatives
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ...pluginReact.configs.flat.recommended,
    plugins: {
      "react-hooks": pluginReactHook,
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
      "react/jsx-uses-react": 0,
      ...pluginReactHook.configs.recommended.rules,
    },
  },

  // import relatives
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
      "unused-imports": pluginUnusedImports,
      "no-relative-import-paths": pluginNoRelativeImportPaths,
    },
    rules: {
      "simple-import-sort/exports": 2,
      "simple-import-sort/imports": [
        2,
        {
          groups: [
            // Node.js builtins prefixed with `node:` or not
            [
              "^node:",
              "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
            ],
            // Packages. `react` related packages come first.
            ["^react", "^@?\\w"],
            // Internal packages.
            ["^@/"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "unused-imports/no-unused-imports": 2,
      "unused-imports/no-unused-vars": [
        1,
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-relative-import-paths/no-relative-import-paths": [
        1,
        { allowSameFolder: true, rootDir: "src", prefix: "@" },
      ],
    },
  },

  // prettier should be the last to override above
  configPrettier,
];

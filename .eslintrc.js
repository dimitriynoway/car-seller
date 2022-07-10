const fs = require("fs");

/**
 * Detect tsconfig file
 */
// TODO: make config import common to all possible modules
function getProjectFile() {
  if (fs.existsSync("./tsconfig.build.json")) return "./tsconfig.build.json";
  if (fs.existsSync("./tsconfig.json")) return "./tsconfig.json";
  return undefined;
}

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["json", "jest", "@typescript-eslint", "eslint-plugin"],
  env: {
    es6: true,
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    sourceType: "module",
    createDefaultProgram: true,
    project: getProjectFile(),
  },
  extends: ["airbnb/base", "plugin:@typescript-eslint/recommended", "eslint:recommended", "prettier"],
  rules: {
    "import/no-import-module-exports": "off",
    "prefer-const": "error",
    "mocha/handle-done-callback": "off",
    "max-len": [
      "error",
      {
        code: 125,
      },
    ],
    indent: "off",
    "import/named": "off",
    "import/extensions": "off",
    "no-empty-function": "off",
    "prefer-promise-reject-errors": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "arrow-parens": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": "warn",
    "no-unused-expressions": 0,
    "no-nested-ternary": 0,
    "object-curly-newline": 0,
    "comma-dangle": 0,
    "dot-notation": 0,
    "no-useless-constructor": "off",
    "no-useless-escape": "off",
    semi: ["error", "always"],
    "operator-linebreak": "off",
    "space-before-function-paren": "off",
    "no-await-in-loop": "warn",
    "no-var-requires": "off",
    "max-classes-per-file": "off",
    "no-shadow": "off",

    /* TypeScript rules */
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none", // none - do not check arguments
        ignoreRestSiblings: false,
      },
    ], // tslint:no-unused-variable
  },

  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-misused-promises": "off",
      },
    },
  ],
};

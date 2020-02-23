module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "eslint-plugin-prettier",
    "eslint-plugin-import",
    "react",
    "jest",
    "cypress",
    "@typescript-eslint"
  ],
  env: {
    // 'jest/globals': true,
    node: true,
    "cypress/globals": true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    useJSXTextNode: false,
    warnOnUnsupportedTypeScriptVersion: true,
    project: "./tsconfig.json"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2
      }
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: false
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    "@typescript-eslint/member-naming": "error",
    "@typescript-eslint/member-ordering": [
      "error",
      { default: ["field", "constructor", "method"] }
    ],
    // '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    // '@typescript-eslint/no-object-literal-type-assertion': [
    //   'error',
    //   { allowAsParameter: false }
    // ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": ["error", { allowDestructuring: true }],
    // '@typescript-eslint/no-triple-slash-reference': 'error',
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "react/display-name": "off",
    "react/prop-types": "off",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "react/jsx-no-bind": "error",
    "import/export": "off",
    // 'import/no-default-export': 'error',
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    "no-case-declarations": "off",
    "eol-last": ["warn", "always"],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ]
  }
};

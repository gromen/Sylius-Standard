module.exports = {
  extends: "airbnb-base",
  env: {
    node: true,
  },
  rules: {
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: true,
        avoidExplicitReturnArrows: true,
      },
    ],
    quotes: [2, "single"],
    "function-paren-newline": ["error", "consistent"],
    "max-len": [
      "warn",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};

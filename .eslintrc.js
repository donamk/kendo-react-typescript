module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["prettier"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures:  {
            jsx:  true,
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    rules: {
        "no-debugger": "off",
        "no-console": "off",
        "no-unused-vars": "warn",
        "react/prop-types": "warn"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    "root": true
};

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "indent": ["error", 4],
        "quotes": ["warn", "single"],

        "no-console": ["off"],
        "no-empty": ["off"],
        "no-undef": ["off"],
        "no-class-assign":"error",
        "constructor-super":"error",
        "brace-style": ["error", "1tbs"],
        "no-unused-vars":"warn",
        "dot-location": ["error", "property"],
        "camelcase": ["warn", {
            "properties": "always"
        }],
        "comma-dangle": ["warn", "always-multiline"],
        "comma-style": ["warn", "last"],
        "func-call-spacing": ["warn", "never"],
        "max-depth": ["warn", 4],
        "max-len": ["warn", 80],
        "max-nested-callbacks": ["warn", 4],
        "new-cap": ["warn", {
            "newIsCap": true,
            "capIsNew": true,
            "properties": true
        }],
        "new-parens": ["warn"],
        "no-tabs": ["warn"],
        "no-trailing-spaces": ["warn", {
            "skipBlankLines": true
        }],
        "no-whitespace-before-property": ["warn"],
        "semi-spacing": ["warn"],
        "space-before-function-paren": ["warn", "never"],
        "space-infix-ops": ["warn"],

        "no-duplicate-imports": ["warn"],
        "no-var": ["warn"],
        "object-shorthand": ["warn", "always"],
        "prefer-template": ["warn"],
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-lone-blocks": "error",
        "no-mixed-spaces-and-tabs": "warn",
        "no-multi-spaces": "warn",
        "no-path-concat": "warn",
        "no-redeclare": "warn",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-whitespace-before-property": "error",
        "rest-spread-spacing": "error",
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-unary-ops": "error",
        "template-curly-spacing": "error",
        "valid-typeof":"error",
        
    }
}

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        sourceType: 'module'
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'comma-dangle': ['error', 'never'],
        'no-param-reassign': ['error', { props: false }],
    }
};

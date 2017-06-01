module.exports = {
    "extends": "cnn-starter-base",
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "System": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "classes": true,
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "jsx-a11y",
        "eslint-plugin-react"
    ],
    "rules": {
        "react/jsx-uses-vars": 1,
        "react/jsx-uses-react": 2,
        "one-var": "off"
    }
};

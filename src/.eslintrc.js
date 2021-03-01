module.exports = {
    "rules": {
        "no-unused-vars": [
            "error", { "vars": "all", "args": "none" }
        ],
        "no-console":0,
        "indent": "off",
        "quotes": [
            0,
            "never"
        ],
        "linebreak-style": [
            "error", "windows"
        ],
        "semi": [
            0,
            "never"
        ]
    },
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended"
};
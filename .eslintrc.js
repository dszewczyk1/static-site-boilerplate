module.exports = {
    "extends": "airbnb-base",
    "env": {
      "browser": true,
      "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 11,
      "sourceType": "module",
      "allowImportExportEverywhere": true,
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true,
      }
    },
    "rules": {
      "linebreak-style": 0,
      "no-named-as-default": 0,
      "no-new": 0,
      "no-console": 0
    }
};

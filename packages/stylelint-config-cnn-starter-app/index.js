"use strict"

module.exports = {
  "plugins": ["stylelint-order"],
  "rules": {
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always", {
        except: ["first-nested"],
        ignore: ["stylelint-commands"],
      }
    ],
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      }
    ],
    "declaration-block-trailing-semicolon": "always",
    "font-family-no-duplicate-names": true,
    "indentation": 4,
    "max-empty-lines": 1,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "order/declaration-block-properties-alphabetical-order": true,
    "order/declaration-block-order": [
        {
            "type": "at-rule",
            "name": "extend"
        },
        'declarations',
        {
            "type": "at-rule",
            "name": "include"
        }
    ]
  },
};

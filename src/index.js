'use strict';

module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-prettier'],
    rules: {
        indentation: 4,
        'value-keyword-case': [
            'lower',
            {
                ignoreProperties: ['composes'],
            },
        ],
        // Tailwind specific
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};

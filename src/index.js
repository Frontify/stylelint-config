'use strict';

module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules',
        'stylelint-config-prettier',
        'stylelint-config-idiomatic-order',
    ],
    plugins: ['stylelint-order'],
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
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};

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
    },
};

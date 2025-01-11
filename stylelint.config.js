import { propertyGroups } from 'stylelint-config-clean-order'

const propertiesOrder = propertyGroups.map((properties) => ({
  emptyLineBefore: 'always', // Don't add empty lines between order groups.
  noEmptyLineBetween: false,
  properties,
}))

/** @type {import('stylelint').Config} */
export default {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    '@stylistic/stylelint-config',
    // 'stylelint-config-recess-order',
    'stylelint-config-clean-order',
  ],
  // plugins: ['stylelint-order'],
  rules: {
    'block-no-empty': true,
    // 'order/properties-alphabetical-order': true,

    'order/order': ['custom-properties', 'declarations'],
    // 'order/properties-order': ['width', 'height'],

    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['grid-column', 'grid-row', 'grid-area'],
      },
    ],

    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      },
    ],

    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'after-same-name',
          'inside-block',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
          'first-nested',
        ],
        ignore: [
          'after-comment',
          'first-nested',
          'inside-block',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
        ],
        ignoreAtRules: ['else'],
      },
    ],

    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    '@stylistic/block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
  },
}

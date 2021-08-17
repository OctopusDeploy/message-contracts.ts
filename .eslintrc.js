module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'node_modules/',
    'patches/',
    'codemods/',
    'webpack/',
    '.eslintrc.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'jest-dom',
    'jsdoc',
    'prefer-arrow',
    'prettier',
    'testing-library',
  ],
  overrides: [
    {
      files: ['**/*.spec.ts*'],
      rules: {
        // It is very common to store values initialised in `beforeEach` that don't get initialized inline.
        // We support these scenarios by disabling this rules in test files
        // This rule provides little value in these files anyway
        '@typescript-eslint/init-declarations': 'off',
        // As per the documentation, this rule should only apply to jest test files
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md#when-not-to-use-it
        'jest/no-standalone-expect': 'error',
      },
    },
    {
      files: ['app/primitiveComponents/**/*.ts*'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['app/**/importFromDynamicExpression.js'],
      rules: {
        'jsdoc/no-undefined-types': 'off',
      },
    },
  ],
  rules: {
    // The typescript version adds extra checks on top of the eslint version, so we disable the eslint version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'never' },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/init-declarations': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    //https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/interface-name-prefix': 'off', //deprecated in favor of naming-convention rule
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/array-type': [
      //consider enabling as error
      'off',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/quotes': [
      'error',
      'double',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'NodeJS.Timer': {
            message:
              'We use functions like setTimeout in the browser and in nodejs (as part of functional tests). The type is different in each case, so we need to rely on type inference to make sure the correct type is used in each environment.',
            fixWith: 'ReturnType<typeof setTimeout>',
          },
          'NodeJS.Timeout': {
            message:
              'We use functions like setTimeout in the browser and in nodejs (as part of functional tests). The type is different in each case, so we need to rely on type inference to make sure the correct type is used in each environment.',
            fixWith: 'ReturnType<typeof setTimeout>',
          },
        },
        extendDefaults: false,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    'init-declarations': 'off',
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', '**.*should*', 'assert*', '**.assert*'],
      },
    ],
    'jest/no-standalone-expect': 'off',
    'jest/valid-expect': ['error', { maxArgs: 2 }],
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-param-description': 'off',
    'no-case-declarations': 'off', //should consider enabling
    'no-eq-null': ['error'],
    'no-dupe-class-members': 'off',
    'no-extra-boolean-cast': 'off',
    'no-irregular-whitespace': 'off',
    'no-multi-spaces': 'error',
    'no-prototype-builtins': 'off', //should enable, although very unlikely to break in our case
    'no-restricted-imports': [
      'error',
      {
        paths: [
          //We specify paths here manually, since not all imports will be matched i.e. sub folder imports where we are importing individual es modules such as @material-ui/core/Tab
          {
            name: '@material-ui/icons',
            message:
              '@material-ui/icons may only be imported in the primitiveComponents folder.',
          },
          {
            name: '@material-ui/core',
            message:
              '@material-ui/core may only be imported in the primitiveComponents folder.',
          },
          {
            name: 'material-ui',
            message:
              'material-ui may only be imported in the primitiveComponents folder.',
          },
        ],
        patterns: ['@material-ui/*', 'material-ui/*'],
      },
    ],
    'no-undef': 'off', //typescript will catch these
    'prefer-rest-params': 'off', //should consider setting this to warn
    'prefer-spread': 'off', //should consider setting this to warn
    'prettier/prettier': 'error',
    'sort-imports': [
      'error',
      {
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
  },
};

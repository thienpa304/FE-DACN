// eslint.config.js
[
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'] // Cập nhật đường dẫn cần bỏ qua theo dự án của bạn
  },
  {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:react/recommended',
      'airbnb-typescript',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',

    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 11,
      project: './tsconfig.json',
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'unused-imports'],

    settings: {
      react: {
        pragma: 'React',
        fragment: 'Fragment',
        version: 'detect'
      }
    },
    rules: {
      'prettier/prettier': 'off',
      'react/jsx-filename-extension': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      'import/prefer-default-export': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'comma-dangle': 'off',
      'max-len': 'off',
      'no-console': 'off',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-return-assign': 'off',
      'object-curly-newline': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'typescript-eslint/no-unused-vars': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/no-unescaped-entities': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-max-props-per-line': [
        1,
        {
          maximum: 2,
          when: 'multiline'
        }
      ],
      indent: 'off',
      '@typescript-eslint/indent': [0],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['off'],
      '@typescript-eslint/no-shadow': ['off'],
      '@typescript-eslint/dot-notation': ['off'],
      'react/prop-types': ['off'],
      '@typescript-eslint/naming-convention': ['off'],
      '@typescript-eslint/no-unused-vars': ['on'],
      'unused-imports/no-unused-imports-ts': 'on'
    }
  }
];

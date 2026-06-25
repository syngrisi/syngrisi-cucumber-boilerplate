import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import wdio from 'eslint-plugin-wdio';
import globals from 'globals';

export default tseslint.config(
    {
        ignores: [
            'node_modules/**',
            'coverage/**',
            '.pm2/**',
            '.sy-data/**',
            'logs/**',
            'demo-app/**',
            '*.bundle.js',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    wdio.configs['flat/recommended'],
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
                // WebdriverIO globals injected at runtime
                browser: 'readonly',
                $: 'readonly',
                $$: 'readonly',
                driver: 'readonly',
                expect: 'readonly',
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        },
    },
    {
        // Jest unit tests
        files: ['test/**/*.{js,ts}'],
        languageOptions: {
            globals: {
                ...globals.jest,
                _expect: 'readonly',
            },
        },
        rules: {
            'no-undef': 'off',
        },
    },
);

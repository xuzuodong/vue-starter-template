module.exports = {
    extends: '@antfu',
    rules: {
        'curly': 'off',
        'no-console': 'warn',
        'no-unused-vars': 'off',
        'no-trailing-spaces': 'warn',
        'space-before-function-paren': 'off',
        'antfu/if-newline': 'off',
        'vue/component-name-in-template-casing': ['warn', 'kebab-case', { registeredComponentsOnly: false }],
        'vue/html-self-closing': ['warn', { html: { normal: 'never', void: 'always' } }], // https://eslint.vuejs.org/rules/html-self-closing.html#html-normal-never-void-always
        'vue/singleline-html-element-content-newline': ['warn', { ignoreWhenNoAttributes: true }],
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/brace-style': ['off'],
        '@typescript-eslint/consistent-indexed-object-style': 'off',
    },
    ignorePatterns: [
        '**/components.d.ts',
        '**/auto-imports.d.ts',
        '.vscode/**/*',
        '**/*.md',
        '**/*.css',
        '**/*.scss',
        '**/*.png',
        '**/*.sh',
        '**/*.svg',
        '**/*.jpg',
        '**/*.yml',
    ],
    overrides: [
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'eol-last': 'off',
            },
        },
    ],
}

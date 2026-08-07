import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    printWidth: 100,
    ignorePatterns: ['gatsby-browser.js', 'gatsby-ssr.js', 'test-installs/**'],
  },
  lint: {
    ignorePatterns: ['gatsby-browser.js', 'gatsby-ssr.js', 'index.js', 'test-installs/**'],
  },
  test: {
    passWithNoTests: true,
  },
  pack: {
    entry: {
      'gatsby-browser': './src/gatsby-browser.js',
      'gatsby-ssr': './src/gatsby-ssr.js',
    },
    format: ['cjs'],
    outDir: '.',
    clean: false,
    hash: false,
    loader: {
      '.js': 'jsx',
    },
    inputOptions: {
      transform: {
        jsx: 'react',
      },
    },
    outExtensions: () => ({ js: '.js' }),
  },
})

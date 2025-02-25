module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "es5",
  bracketSameLine: false,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    '^react(.*)',
    '<THIRD_PARTY_MODULES>',
    '@(.*)',
    '^[.]',
  ],
};



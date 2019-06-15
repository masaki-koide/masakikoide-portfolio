module.exports = {
  presets: [
    [
      '@babel/env',
      {
        corejs: 3,
        targets: { ie: '11' },
        useBuiltIns: 'usage',
      },
    ],
  ],
}

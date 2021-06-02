module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        modules: false,
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};

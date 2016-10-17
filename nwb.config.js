module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'WhiplashUILibrary',
      externals: {
        react: 'React'
      }
    }
  }
};

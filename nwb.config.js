const path = require('path');

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
  },

  webpack: {
    aliases: {
      images: path.resolve('src/images'),
      fonts: path.resolve('src/fonts/index.css'),
      src: path.resolve('src'),
      demo: path.resolve('demo/src')
    },

    compat: {
      enzyme: true
    },

    html: {
      template: 'public/index.html'
    }
  }
};

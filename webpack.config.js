const path = require('path');

module.exports = {
  entry: './examples/counter.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'counter.js'
  }
};

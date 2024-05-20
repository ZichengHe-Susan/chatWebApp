const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config(); // This line loads .env file contents into process.env

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env) // Maps all process.env variables
    })
  ]
};

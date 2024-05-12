const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // ... other webpack configurations
  plugins: [
    new ReactRefreshWebpackPlugin()
    // ... other plugins
  ],
  module: {
    rules: [
      // ... other rules
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [require.resolve('react-refresh/babel')]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};

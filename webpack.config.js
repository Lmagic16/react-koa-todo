var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/client.tsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ],
  module: {
    rules: [
        { 
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.js$/,
            use: 'babel-loader'
        },
        { 
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff" 
        },
        { 
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader" 
        }
      ]
  }
}

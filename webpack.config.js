const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";
module.exports = {
  mode: "development",    
  entry: "./src/index.js",      
  module: {
    rules: [
      {
        test: /\.js$/,      
        exclude: /node_modules/,                
        use:{
            loader: "babel-loader"            
          },
      },
      {
        test: /\.css$/,
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'},          
        ]
      },
      { 
        test: /\.(png|PNG|jpg|JPG)$/, 
        use:[
            {
                loader: 'file-loader',
                options:
                {
                    outputPath: 'Resources'
                }
            }
        ] 
    }     
    ],
  },
  resolve:{        
    extensions:[".js",".jsx",".css"]    
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [   
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
       }),
  ]  
};
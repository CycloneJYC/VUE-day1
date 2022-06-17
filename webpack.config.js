// webpack默认能打包 js和json文件
// 可以通过 loader 加载器打包css，less

// css-loader
// 1.yarn add css-loader style-loader
// 2.配置 module.rules:[]

// less-loader
// 1.安装 yarn add less less-loader -D
// 2.配置rules

// 打包自动创建html
// 1.yarn add html-webpack-plugin
// 2. 填入配置项

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"), // 出口路径
    filename: "main.js", // 出口文件名
  },
  //mode 模式
  mode: "development",

  // 打包自动创建html 配置
  plugins: [
    new HtmlWebpackPlugin({
      // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      template: "./public/index.html",
    }),
  ],

  //   配置 loaders
  module: {
    rules: [
      // css-loader
      { 
        test: /\.css/i, 
        //从后往前解析，先通过css-loader解析，再通过style-loader解析
        use: ["style-loader", "css-loader"] 
      },
      // less-loader
      { 
        test: /\.less/i, 
        //从后往前解析，先通过css-loader解析，再通过style-loader解析
        use: ["style-loader", "css-loader", "less-loader"] 
      },
      
    ],
  },
};

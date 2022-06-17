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

// 一 asset/resource
// webpack5内置了url-loader file-loader
// 二 asset/inline 图片打包成dataurl，js
// 小图片打包成base64，大图片打包成图片

// webpack-dev-server
// 1.yarn add webpack-dev-server -D
// 2.package.json 配置 "serve": "webpack serve"
// 3.在webpack.config.js中配置

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "lib"), // 出口路径
    filename: "main.js", // 出口文件名
    clean: true,
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

  // 配置devServer
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    //端口号
    port: 30000,
    open: true,
  },
  //   配置 loaders
  module: {
    rules: [
      // css-loader
      {
        test: /\.css/i,
        //从后往前解析，先通过css-loader解析，再通过style-loader解析
        use: ["style-loader", "css-loader"],
      },
      // less-loader
      {
        test: /\.less/i,
        //从后往前解析，先通过css-loader解析，再通过style-loader解析
        use: ["style-loader", "css-loader", "less-loader"],
      },

      // asset/resource
      // 配置图片打包
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        // asset/resource 将资源原样打包
        // asset/inline 讲图片以dataURL的形式打包进js中
        // asset 超过8kb原样打包，小于8kb以dataURL的形式打包进js中
        type: "asset",

        // parser:解析器
        parser: {
          // Condition: 条件
          dataUrlCondition: {
            //以字节为单位
            maxSize: 2 * 1024, //限制界限为2kb
          },
        },
      },

      // 字体配置
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: "asset/resource",

        //generator: 发生器
        //设定打包后的路径以及文件名
        generator: {
          // 放在fonts文件夹下
          filename: "fonts/font-[hash:6][ext]",
        },
      },
    ],
  },
};

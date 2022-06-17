const path = require("path")



module.exports = {
    entry: "./src/index.js", 
    output: { 
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "main.js" // 出口文件名
    },
    mode: "development"
}
//引入js文件
import { box1 } from "../src/box1.js";
import { box2 } from "../src/box2.js";
box1();
box2();

//引入css文件
import "./styles/index.css";
//引入less文件
import "./styles/index.less";

//用原生js引入图片
import logosrc from "./assets/logo.png";
import yggsrc from "./assets/ygg.jpeg";
const logo = document.createElement("img");
const ygg = document.createElement("img");
logo.src = logosrc;
ygg.src = yggsrc;
document.body.append(logo);
document.body.append(ygg);

//引入字体文件
import "./assets/fonts/iconfont.css";

//高版本js
class App {
  static a = '三三';
}
console.log(App.a);

//引入vue
import apps from "./app.vue"
import * as PIXI from 'pixi.js';
import "./scss/index.scss";

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas"
}

PIXI.utils.sayHello(type);
'use strict';

class Pixelfit {
  constructor({ type = 'm', width = 750, height = 1080, target = document.body } = {}) {
    // 默认类型是移动端，宽高默认值直接定义
    this.type = type;
    this.designWidth = width;
    this.designHeight = height;
    this.targetDom = target;

    // 校验 type 合法性
    if (!['m', 'l'].includes(this.type)) {
      throw new Error("Invalid type: type must be 'm' (mobile) or 'l' (large screen).");
    }
  }

  // 启动适配逻辑
  init() {
    // 默认类型是移动端，宽高默认值直接定义
    this.type = type;
    this.designWidth = width;
    this.designHeight = height;
    this.targetDom = target;
    const applyAdp = () => {
      if (this.type === 'm') this.mobileAdp();
      if (this.type === 'l') this.largeScreenAdp();
    };
    applyAdp();
    window.addEventListener("resize", applyAdp);
  }

  // 大屏设备适配
  largeScreenAdp() {
    const { innerWidth: deviceWidth, innerHeight: deviceHeight } = window;

    // 计算缩放比例
    const scale = Math.min(deviceWidth / this.designWidth, deviceHeight / this.designHeight);

    // 设置样式
    Object.assign(this.targetDom.style, {
      transform: `translate(-50%, -50%) scale(${scale})`,
      position: "absolute",
      left: "50%",
      top: "50%",
      width: `${this.designWidth}px`,
      height: `${this.designHeight}px`,
    });
  }

  // 移动端适配
  mobileAdp() {
    const html = document.documentElement;

    // 设置根字体大小
    html.style.fontSize = `${(html.getBoundingClientRect().width / this.designWidth) * 100}px`;
  }

  

  // px 转 rem
  static px2rem(px, designWidth = 750) {
    if (typeof px !== "number" || isNaN(px)) {
      throw new Error("px2rem expects a valid number.");
    }

    const deviceWidth = document.documentElement.getBoundingClientRect().width;
    return +(px / (deviceWidth / designWidth) / 100).toFixed(2);
  }

  // rem 转 px
  static rem2px(rem, designWidth = 750) {
    if (typeof rem !== "number" || isNaN(rem)) {
      throw new Error("rem2px expects a valid number.");
    }

    const deviceWidth = document.documentElement.getBoundingClientRect().width;
    return +(rem * (deviceWidth / designWidth) * 100).toFixed(2);
  }
}

export default Pixelfit;

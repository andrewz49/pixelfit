'use strict';
class Pixelfit {
  constructor(info){
    this.window = info.window
    this.type = info.type??'m'
    if(this.type == 'm'){
      this.design_width = info.width??750
    }
    if(this.type == 'l'){
      this.design_width = info.width??1920
      this.design_height = info.height??1080
      this.tartget_dom = info.tartget??window.document.body
    }
  }
  largeScreenAdp() { // 大屏设备适配法
    const window = this.window
    const design_width = this.design_width
    const design_height = this.design_height
    const tartget_dom = this.tartget_dom
    if (window.document) {
      // 设备可视区域宽高
      const deviceWidth = window.innerWidth;
      const deviceHeight = window.innerHeight;
      // 设计图宽高
      const designWidth = design_width;
      const designHeight = design_height;
      // 设备/设计图比例
      let widthRatio = deviceWidth / designWidth;
      let heightRatio = deviceHeight / designHeight;
      let scale = Math.min(widthRatio, heightRatio);
      tartget_dom.style.transform = `translate(-50%,-50%) scale(${scale})`;
      tartget_dom.style.position = `absolute`;
      tartget_dom.style.left = `50%`;
      tartget_dom.style.top = `50%`;
      tartget_dom.style.width = `${designWidth}px`;
      tartget_dom.style.height = `${designHeight}px`;
    }else{
      return
    }
  }
  mobileAdp() { // 移动端适配法
    const window = this.window
    const design_width = this.design_width
    if (window.document) {
      const html = window.document.documentElement;
      // 设备可视区域宽度
      const deviceWidth = html.getBoundingClientRect().width;
      // 设计图宽度
      const designWidth = design_width;
      // 1rem代表的大小
      const initFontSize = 100;
      html.style.fontSize = (deviceWidth / designWidth) * initFontSize + "px";
    }else{
      return
    }
  }
  pixelfit(){
    const window = this.window;
    const type = this.type;
    const _this = this
    if(type == "m"){
      this.mobileAdp();
      window.onresize = function () {
        _this.mobileAdp();
      };
    }
    if(type == "l"){
      this.largeScreenAdp();
      window.onresize = function () {
        _this.largeScreenAdp();
      };
    }
  }
  px2rem(px_num){ // 将页面px转为rem
    const design_width = this.design_width
    const html = document.documentElement;
    const deviceWidth = html.getBoundingClientRect().width;// 设备可视区域宽度
    const designWidth = design_width;// 设计图宽度
    const design_ratio = deviceWidth / designWidth;
    const rem_num = Number((px_num / 100 / design_ratio).toFixed(2));
    return rem_num;
  }
  rem2px(rem_num){ // 将rem转为页面px
    const design_width = this.design_width;

    const html = document.documentElement;
    const deviceWidth = html.getBoundingClientRect().width;// 设备可视区域宽度
    const designWidth = design_width;// 设计图宽度
    const design_ratio = deviceWidth / designWidth;
    const px_num = Number((rem_num * 100 * design_ratio).toFixed(2));
    return px_num
  }
}

export default Pixelfit
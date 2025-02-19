/* 
  PostCSS 的配置文件
  PostCSS 是基于 Node.js 运行的一个处理CSS的工具
  所以它的配置文件也是运行在Node.js中的
*/
// PostCSS 配置文件需要导出一个对象
module.exports = {
  // 需要配置的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀,用来兼容不同的浏览器
    // 因为Vue-CLI是通过项目中的.browserslistrc 文件来配置要兼容的环境信息的 所以我们这里并不需要
    //  'autoprefixer': {
    //    browsers: ['Android >= 4.0', 'iOS >= 8']
    //  },
    // 把px转为rem
    'postcss-pxtorem': {
      // 转换的根元素的基准值
      // 正常去情下按照你的设计稿来
      // 750 宽的设计稿， 750 / 10 = 75
      // 370 宽的设计稿， 370 / 10 = 37.5
      rootValue: 37.5,
      // 需要转换的CSS属性，*就是所有属性都要转换
      propList: ['*'],
      // 若想设置部分样式不转化 可以在配置项中写出
      // eg: 除 border和font-size外 所有px均转化为rem
      // propList: ["*", "!border","!font-size"], 
      "exclude": /node_modules/i, // 这里表示不处理node_modules文件下的css
      "selectorBlackList": ["ignore-"], // 忽略的选择器前缀
      "mediaQuery": false, // 是否在媒体查询中也转换 px
      "minPixelValue": 1, // 最小的 px 值才转换为 rem
      "replace": true, // 是否更换属性值，而不是添加一个rem的新属性
      "unitPrecision": 5 // 单位转换后的精度
    }
  }
}
1.request   dva/fetch   ant desing pro 请求库

2.浏览器访问接口 返回的json数据格式化插件


3.mock.js  mock在ant desing pro


4.ant desing pro 关闭mock
在package.json中 "start:no-mock": "cross-env MOCK=none umi dev",
使用  npm start:no-mock


5.配置代理
在config中配置
proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },



  express cors 使用中间件加一个头信息，允许跨域


  6.请求本质是修改浏览器地址栏地址，而以api开头后会被截取，然后定向到代理上

// const proxy= require('http-proxy-middleware')

// module.exports = function(app){
//   app.use(
//     proxy('/api1',{
//       target:'http://localhost:5000' //请求转发给谁
//       changeOrigin:true, //控制服务器收到的请求头中Host的值
//       pathRewrite:{'^/api1':''} //充血请求路径（必须）
      
//     })
//   )
// }
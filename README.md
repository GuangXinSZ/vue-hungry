>项目构建: 使用 cnpm init webpack (project)
>>引入初始化css用rem做适配: ~styles/reset.css
>>>引入fastclick做点击事件处理: cnpm install fastclick --save<br />
>>mian.js引入 fastclick  import fastClick from 'fastclick fastClick.attach(document.body)<br />
>>>>用了axios做数据传输 使用全局axios  import axios from 'axios' //添加到vue原型上面 Vue.prototype.$http = axios<br />
>>>全局使用 this.$http.get(url).then( (response)=> { console.log(response) } )
>>>>>接下来配置mock本地数据上线版本的时候设置接口访问位置/api/data.json 配置如下
>>>>config/index.js 添加到assetsPublicPat后面
  proxyTable: {<br />
      '/api':  <br />
        target: 'http://localhost:8080', <br />
        pathRewrite: <br />
          '^/api': '/static/mock' <br />
        } <br />
      } <br />
    }, <br />
>>>>>> 使用方式 this,$http.get('/api/data.json').then()


>今天天已经完成主页面开发 商品切换

![Image_text](https://raw.githubusercontent.com/AnimationXin/JavaScript/master/%E4%BB%8E0%E5%BC%80%E5%A7%8B/images/hungry.png)
![Image_text](https://raw.githubusercontent.com/AnimationXin/JavaScript/master/%E4%BB%8E0%E5%BC%80%E5%A7%8B/images/hungry2.png)<br />
![Image_text](https://raw.githubusercontent.com/AnimationXin/JavaScript/master/%E4%BB%8E0%E5%BC%80%E5%A7%8B/images/shop.png)
![Image_text](https://github.com/AnimationXin/JavaScript/blob/master/%E4%BB%8E0%E5%BC%80%E5%A7%8B/images/view.png)
<br />
![Image_text](https://raw.githubusercontent.com/AnimationXin/JavaScript/master/%E4%BB%8E0%E5%BC%80%E5%A7%8B/images/pass.png)
<br />
![image_text](https://raw.githubusercontent.com/AnimationXin/JavaScript/master/%E4%BB%8E0%E5%BC%80%E5%A7%8B/images/low.png)
希望大家多支持支持  开发中.......
 

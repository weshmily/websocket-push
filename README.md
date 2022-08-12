# 为啥要这个软件
前一阵要做一个和后端联调RFID的系统(B端)决定才有websocket进行通讯,但是每次联调都需要后端配合于是在网上找模拟后端websocket的软件,找到的大多都是用不了或者骗豆的

# 代码
目前代码已经开源,在Gihub上,欢迎大家.来点星星  多提意见哈
代码地址: [https://github.com/weshmily/websocket-push/](https://github.com/weshmily/websocket-push/)

# 软件包下载
大家也可以马上使用,不要编译代码 我已经打包好了
下载地址: https://github.com/weshmily/websocket-push/releases/tag/websocket-push

#  操作步骤
1. 解压后得到 websocket-push-win32-x64目录里websocket-push.exe就是程序入口
![在这里插入图片描述](https://img-blog.csdnimg.cn/ee13772de34b4ebca70fa715eb276134.png)

2. 创建服务 开启一个websocket服务

![在这里插入图片描述](https://img-blog.csdnimg.cn/f2378532ba80401d939a6847f691280f.png)
3.客户端配置好对应端口的地址
![在这里插入图片描述](https://img-blog.csdnimg.cn/52cb60dfba8c4bda8dd4c78ab540ae66.png)

 4. 回到软件等待客户端连接后点击**刷新** 就可以查看连接上的客户端

![在这里插入图片描述](https://img-blog.csdnimg.cn/4f573d7c0ec3420cb3f64c289d0fbb3e.png)
5. 在下面填写好发送的消息点击发送  客户端就可以收到消息啦

> 当然除了独立的window版本。我们还为[Utools](http://www.u.tools/)写了插件。方便Utools方便使用

# uTools插件搜索
打开插件应用市场--搜索--websocket推送
![在这里插入图片描述](https://img-blog.csdnimg.cn/96f69ba7ce0e47a68e529d4b26216874.png)

### 源代码
本文章的相关代码地址: [https://github.com/weshmily/websocket-push](https://github.com/weshmily/websocket-push)

#### 作者: 前端小孟
#### 官网: 百度搜索([前端小孟](http://weareshmily.top/ "前端小孟"))
#### CSDN博客:http://blog.csdn.net/qq_27118895
#### GitHub: https://github.com/weshmily
#### 公众号:搜索"weshmilyqd"
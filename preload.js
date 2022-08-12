//websocket.js
// 搭建websocket服务器
let ws = require("nodejs-websocket");

var _server
window.initWebScoket = function (port) {
    _server = ws.createServer(conn => {
        // 接收客户端返回的数据
        conn.on("text", function (str) {
            console.log(str, "接收客户端传过来的值");
        });
        //客户端关闭连接
        conn.on("close", function () {});
        conn.on("error", function (err) {
            //error
            console.log(err, "连接报错");
        });
    });
    // 定义端口为2002【端口自己随意定义】
    _server.listen(Number(port), function () {
        console.log("连接成功")
        window.IfIsSuccessful(true)
    })
}

window.WebSocketSend = function (msg, users) {
    console.log(_server.connections, "用户")
    var newUser = [];
    for (let i = 0; i < _server.connections.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (_server.connections[i].key === users[j].key) {
                newUser.push(_server.connections[i])
            }
        }
    }

    console.log(newUser, "newUser")
    newUser.forEach(function (conn) {
        conn.sendText(msg)
    })
}

window.QueryUser = function () {
    return _server.connections.map((item) => {
        return {
            key: item.key,
            path: item.path,
            origin: item.headers.origin
        }
    })
}
window.CloseWebsocket = function () {


    _server.connections.forEach(function (conn) {
        conn.close()
    })
    return _server.close(() => {
        window.IfIsSuccessful(false)
    })
}
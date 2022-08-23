const http=require('http');
const mes='new text';
http.createServer(function (req,resp) {
    console.log(mes);
    console.log(mes);
}).listen(3000,'127.0.0.1',()=>{
    console.log('sever started listening');
})
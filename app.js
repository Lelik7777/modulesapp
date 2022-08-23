const express=require('express');
const app=express();
app.get('/',function (request,responce) {
    responce.end('hello from express')
});
app.listen(3000);

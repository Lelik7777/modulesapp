const express=require('express');
const app=express();
app.get('/',function (request,responce) {
    responce.end('hi,guys ');
});
app.listen(3000);


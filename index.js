const data = require('./data');
console.log("Node Js");
console.log(data);
console.log("JavaScript Promises");

async function xyz(){
var p1 = new Promise((a,reject)=>{
    setTimeout(() => {
        a(34)
    }, 2000);
})
var p2 = new Promise((b,reject)=>{
    setTimeout(() => {
        b(132)
    }, 500);
})
var p3 = new Promise((c,reject)=>{
    setTimeout(() => {
        c(78)
    }, 1200);
})
var p4 = new Promise((d,reject)=>{
    setTimeout(() => {
        d(89)
    }, 900);
})
var p5 = new Promise((e,reject)=>{
    setTimeout(() => {
        e(96)
    }, 1000);
})


var a = await p1;
var b = await p2;
var c = await p3;
var d = await p4;
var e = await p5;


console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(a+b+c+d+e);
}


xyz();

// const express=require('express');
// const mongoose=require('mongoose');
// const data=require('./data');
// const app=express();
// app.get('/',(req,res)=>{
// res.send(data);
// });
// app.listen(5500);


// connect mondodb
// const express = require('express');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ECOM');
// var productSchema = mongoose.Schema({
//     productName : String,
//     productCategory : String,
//     productPrice : Number
// });
// var Product = mongoose.model('Product',productSchema,'PRODUCT')
// const app = express();

// app.get('/',async (req,res)=>{
//     var data = await Product.find();
//     res.send(data);
// });

// app.listen(5500);

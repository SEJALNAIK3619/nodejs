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

//get method

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

//post method

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/ECOM');

// var productSchema = mongoose.Schema({
//     productName:String,
//     productCategory:String,
//     productPrice:Number
// });

// var Product = mongoose.model('Product',productSchema,'PRODUCT');

// app.post('/', async (req,res)=>{
//     console.log(req.body);
//     var data = new Product(req.body);

//get and post both method
// const express = require('express');
// const mongoose= require('mongoose');
// const data1 = require('./Data');

// const app = express();
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/ECOM');

// var productSchema = mongoose.Schema({
//     productName : String,
//     productCategory : String,
//     productPrice : Number
// });

// var Product = new mongoose.model('Product',productSchema,'PRODUCT');

// app.get('/',async (req,res)=>{
//     //  var data1 = await Product.find();
//      res.send(data1);
//          });

// app.post('/',async(req,res)=>{

//     var data=new Product(req.body);
//     await data.save();
//     res.send(data);
// })

// app.listen(5500)
//     await data.save();
//     res.send(data);
// });

// app.listen(5500);

//get post put method
// const express = require('express');
// const mongoose= require('mongoose');
// const app = express();
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/ECOM');

// var productSchema = mongoose.Schema({
//     productName : String,
//     productCategory : String,
//     productPrice : Number
// });

// var Product = new mongoose.model('Product',productSchema,'PRODUCT');

// app.get('/',async (req,res)=>{
//     var data = await Product.find();
//          res.send(data);
//          });

// app.post('/',async(req,res)=>{

//     var data=new Product(req.body);
//     await data.save();
//     res.send(data);
// });
// app.put('/:pname',async (req,res)=>{
//     var data= await Product.updateOne(
//         {productName:req.params.pname},
//         {$set:req.body}
//     );
//     res.send(data);
// });

// app.listen(5500)
// app.delete('/:pname',async (req,res)=>{
//     var data= await Product.deleteOne(
//         {productName:req.params.pname}
//         );
//     res.send(data);
// });

// app.post('/search',async (req,res)=>{
//     var data=await Product.findOne(req.body);
//      res.send(data);        
//     });


// var userSchema = mongoose.Schema({
//     userName:String,
//     email:String,
//     password:String
// });
 
// var User = new mongoose.model('User',userSchema,'user');

// app.post('/register',async (req,res)=>{
//     var data = new User(req.body);
//     await data.save();
//     res.send(data);
// });

// app.post('/login',async (req,res)=>{
//     var data = await User.findOne(req.body);
//     res.send(data);
// });

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const foods = [
 {id:1, name:"Burger", price:120},
 {id:2, name:"Pizza", price:250},
 {id:3, name:"Biryani", price:180}
];

let orders = [];

app.get("/foods",(req,res)=>{
 res.json(foods);
});

app.post("/order",(req,res)=>{
 const order = req.body;
 orders.push(order);
 res.json({message:"Order placed successfully"});
});

app.get("/orders",(req,res)=>{
 res.json(orders);
});

app.listen(3000,()=>{
 console.log("Server running at http://localhost:3000");
});
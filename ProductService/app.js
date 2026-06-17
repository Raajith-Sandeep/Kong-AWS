const express = require('express');

const app = express();

app.get('/products',(req,res)=>{
 res.json({
   message:"Product Service"
 });
});

app.listen(3001);
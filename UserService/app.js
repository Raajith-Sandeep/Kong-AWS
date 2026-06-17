const express = require('express');

const app = express();

app.get('/users', (req,res)=>{
 res.json({
  message:"User Service"
 });
});

app.listen(3000);
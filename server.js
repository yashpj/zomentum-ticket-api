const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect Database
connectDB();

//init middleware
app.use(express.json({extended:false}));

app.get('/',(req,res) =>
res.json({msg:'json file dali'}));


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`server running at port ${PORT}`));


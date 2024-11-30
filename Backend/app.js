const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
//Cross-Origin Resource Sharing (CORS). This middleware allows your server to accept requests from different origins (domains),
//By using cors, you ensure that your application can safely handle cross-origin requests, enhancing its flexibility and interoperability
app.get('/',(req,res)=>{
res.send("Hello World");
});

module.exports = app;
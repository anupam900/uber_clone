const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
connectToDb();
app.use(cors());
//Cross-Origin Resource Sharing (CORS). This middleware allows your server to accept requests from different origins (domains),
//By using cors, you ensure that your application can safely handle cross-origin requests, enhancing its flexibility and interoperability
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.get('/',(req,res)=>{
res.send("Hello World");
});
app.use('/users',userRoutes);



module.exports = app;
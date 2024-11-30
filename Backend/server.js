const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;//This retrieves the value of the PORT environment variable 3000 is sefault value

const server = http.createServer(app);// create http server instance and send it to the app which is express application which recieves the http request

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
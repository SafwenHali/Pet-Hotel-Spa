const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = 7000;

// parse request data content type x-www-form-rulencoded /////// json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Import routes
const userRoutes=require('./routes/user');
/*const typepetRoutes=require('./routes/type_pet');
const petRoutes=require('./routes/pet');
const serviceRoutes=require('./routes/service');
const stayRoutes=require('./routes/stay');
const bookservRoutes=require('./routes/bookservice');
const regservRoutes=require('./routes/registerservice');
const bookstayRoutes=require('./routes/bookstay');*/

// Routes Middleware
app.use('/api/user', userRoutes);
/*app.use('/api/typepet', typepetRoutes);
app.use('/api/pet', petRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/stay', stayRoutes);
app.use('/api/bookserv', bookservRoutes);
app.use('/api/regserv', regservRoutes);
app.use('/api/bookstay', bookstayRoutes);*/

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});
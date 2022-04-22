require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./cofig/db'); 

//template
const path = require('path');


const routeProduct = require('./routes/product.js')
const routeBlog = require('./routes/blog.js');
const routeOurTeam = require('./routes/ourTeam.js');
const routeUser = require('./routes/user.js');
const routeLogin = require('./routes/login.js');
const routeCart = require('./routes/cart.js')

const app = express();
const port = process.env.PORT || 5000;




//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static( __dirname + "/uploads"));
console.log(__dirname)


//connect to db
db.connect();

app.use('/api/product', routeProduct);
app.use('/api/blog', routeBlog);
app.use('/api/our-team', routeOurTeam);

app.use('/api/register', routeUser);
app.use('/api/login', routeLogin);

app.use('/api/cart', routeCart);
app.use('/user', routeUser);


app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
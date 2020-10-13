const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const passport = require("passport");
const users = require("./routes/api/users.js");
const app = express();

//Bodyparser Middleware
app.use(bodyParser.urlencoded({
    extended: false
})
);
app.use(bodyParser.json());

//DB configuration
const db = require('./config/keys.js').mongoURI;
//Connect to mongodb
mongoose
    .connect(db,
        { useNewUrlParser: true,
        useUnifiedTopology: true 
        } )
    .then( () => console.log('MongoDb connected...'))
    .catch(err => console.log(err));

    //Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport.js")(passport);

//Routes
app.use("/api/users", users);



// app.set('port', (5000 || process.env.PORT ));

//For avoidong Heroku $PORT error
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });

const port = process.env.Port || 5000;
app.listen(port, () => console.log(`Server started on Port ${port}`));
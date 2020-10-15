const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/users.js");
const app = express();
const path = require('path');


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
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('MongoDb connected...'))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport.js")(passport);

//Routes
app.use("/api/users", users);

// app.set('port', (5000 || process.env.PORT ));

//Sere static assets if in production
if (process.env.NODE_ENV === 'production') {
    // //Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

    // app.use(express.static(path.join(__dirname, './client/build')));
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ' + port));
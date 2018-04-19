let express = require('express');
let bodyParser = require('body-parser');
let path = require ('path');
require('dotenv').config();

let app = express();

app.use(require('./controllers/search.js'));

// Set Static Path
app.use(express.static(path.join(__dirname + '/public')));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', function(req, res) {
    res.redirect('/search');
})

// app.listen(3000, function() {
//     console.log("Server started on port 3000...");
// })

module.exports = app;
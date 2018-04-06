let express = require('express');
let bodyParser = require('body-parser');
let path = require ('path');

let app = express();

app.use( require('./controllers/search.js'));

//View Engine
app.set('view enging', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.redirect('/search');
})

app.listen(3000, function() {
    console.log("Server started on port 3000...");
})


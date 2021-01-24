var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORt || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
    console.log("Server listening on :http://localhost:" + PORT);
});
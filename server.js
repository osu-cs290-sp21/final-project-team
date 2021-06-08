var path = require('path');
var express = require('express');
var app = express();

var expresshandlebars = require('express-handlebars');

app.set('view engine', 'handlebars')
app.use(express.static('views/images'));

var recipeData = require('./recipedata.json')

app.engine('handlebars', expresshandlebars({
    defaultLayout: "index",
    layoutsDir: path.join(__dirname, "views"),
    partialsDir: path.join(__dirname, "views")
}))

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).render("index",{
        recipeData,
        print: true,
        printButton: true
    })
})

app.get("*", (req, res) => {
    res.status(404).render("error",{
        printButton: false
    })
})

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
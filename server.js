var path = require('path');
var express = require('express');
var app = express();

var expresshandlebars = require('express-handlebars');

app.set('view engine', 'handlebars')
app.use(express.static('views/images'));

var recipeData = require('./recipedata.json');
const { nextTick } = require('process');

app.engine('handlebars', expresshandlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialDir: [
        path.join(__dirname, 'views/partials')
    ]
}))

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/webpage/:recipe", function(req, res){
    var idrecipe = req.params.recipe
    if(idrecipe){
        res.status(200).render(idrecipe)
    }
})


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
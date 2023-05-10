const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const https = require("https");
var items =["Buy food" , "Cook food" , "Eat food"]

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day ="";
    console.log(today.getDay());
    console.log(Date());

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            console.log("Check the code")
            break;
    }

    res.render("list", {dayEjs: day , items : items});
});

app.post("/", function(req,res){
    console.log(req.body.newItem);
    items.push(req.body.newItem);
    res.redirect("/");
})

app.listen (port,function() {
    console.log("Server is running on port " + port)

});
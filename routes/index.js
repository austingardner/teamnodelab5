var express = require('express');
var fs = require('fs');
var https = require("https");
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.sendFile("index.html", {root: 'public'});
});

router.get('/getteams',function(req,res,next) {
    console.log("In getteams route");

fs.readFile(__dirname + '/teams.txt',function(err,data) {
  if(err) throw err;
  var teams = data.toString().split("\n");
    /*var myRe = new RegExp("^" + req.query.q);
console.log("myRe: " + myRe);
    console.log("req.query.q: " + req.query.q);*/
    var jsonresult = [
        {
            team: "Gonzaga",
            rank: 1
        },
        {
            team: "Arizona",
            rank: 2
        },
        {
            team: "Baylor",
            rank: 3
        },
        {
            team: "West Virginia",
            rank: 4
        },
        {
            team: "Notre Dame",
            rank: 5
        },
        {
            team: "Maryland",
            rank: 6
        },
        {
            team: "Saint Mary's",
            rank: 7
        },
        {
            team: "Northwestern",
            rank: 8
        }
    ];
/* for(var i = 0; i < teams.length; i++) {
 var result = cities[i].search(myRe); 
  if(result != -1) {
    console.log(cities[i]);
    var team = teams[i].split();
    
    jsonresult.push({team:team[1],rank:team[0]});
 // }*/
//} 
    res.status(200).json(jsonresult);
});

//    console.log(jsonresult);
  });
/*
router.get('/word', function(req,res,next) {
    console.log("in word route");
    var url = "https://owlbot.info/api/v1/dictionary/" + req.query.w + "owl?format=json";
    https.get(url, function(owl) {
        owl.pipe(res);
    });
    
    
    
    
    
    
});


*/


module.exports = router;

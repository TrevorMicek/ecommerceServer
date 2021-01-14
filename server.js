const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const corsOptions = require('./corsOptions');
const path = require('path');
const bodyParser = require("body-parser")

const getUser = require('./database/getUserPass')
const postData = require ('./database/postDatabase')
const writeDatabase = require('./database/writeDatabase');

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors({origin:true,credentials: true}));

app.use('/', express.static('build'));
app.use('/api', express.static(path.join(__dirname, '../jsonData')));

writeDatabase();

app.post("/api/register", function(req, res) {
    var user = req.body;
   
    //postData(user.username, user.password)
    console.log(user)
    
    res.redirect('http://localhost:3000')
    
});

app.get("/api/verify/", function(req, res) {
    try{
        
       
        //salt and hash req.query.password, pass that into getUser
         getUser(req.query.username, req.query.password)
   
        res.redirect('http://localhost:3000')
    //console.log("verifying...")
       
    

    } catch (err) {
        console.log(err)
    }
})




     



/*
app.get("api/jsonData", function(req, res, next) {
    res.send(categories);
  });


const fs = require('fs');

router.get('/api/items', (req, res) => {

    fs.readFile('./data/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});
*/

var listener = app.listen(4000, function() {
    console.log('Listening on port ' + listener.address().port);
});
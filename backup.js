var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Weareallone1!',
    database: 'store'
});
function jsonParser(stringValue, key) {
    var string = JSON.stringify(stringValue);
    var objectValue = JSON.parse(string);
    return objectValue[key];
}
con.connect(function(err) {
    if (err) throw err;
   
    let shoes = `SELECT * FROM shoes WHERE id = 'SHO001'`
    
    ;
con.query(shoes, function(err, result, fields) {
        if (err) throw err;
       
        var shoeObj = result;
        
        var shoeId = JSON.stringify(shoeObj[0].id);
    
        console.log(shoeId);
    })
    con.query("SELECT * FROM shoes", function(err, result, fields) {
        if (err) throw err;
       // console.log(result)
    });
    console.log("Connected to MySQL server.");
});



/* close database connection
con.end(function(err) {
    if (err) throw err;
    console.log('Database Closed');
});
*/


/*
if (err) throw err;
    con.query("SELECT * FROM shoes", function(err, result, fields) {
        if (err) throw err;
        console.log(result)
    });
*/






const mysql = require('mysql');
const store = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Weareallone1!',
    database: 'store'
})
const register = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Weareallone1!',
    database: 'users'
})
module.exports = {
    store: store,
    register: register
};

/*
db.connect((err) => {
    if (err) throw err;
    console.log('mySql connected...');
})
const app = express();

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created');
    })
})

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('posts table created...');
    })
})

app.get('/addpost1', (req, res) => {
    let post = {title:'post one', body: 'this is post 1'}
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('post one added');
    });
})

app.get('/addpost2', (req, res) => {
    let post = {title:'post two', body: 'this is post 2'}
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('post two added');
    });
})

app.get('/getposts', (req, res) => {

    let sql = 'SELECT * FROM posts';
    let query = db.query(sql,(err, results) => {
        if (err) throw err;
        console.log(results)
        res.send('posts fetched');
    });
})


app.get('/getpost/:id', (req, res) => {

    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('post fetched');
    });
})

app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('post updated');
    });
})
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('post deleted');
    });
})

app.listen(3000, () => {
    console.log('server started on port 3000');
})


function jsonParser(stringValue, key) {
    var string = (stringValue);
    var objectValue = JSON.parse(string);
    return objectValue[key].key;
}
*/




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






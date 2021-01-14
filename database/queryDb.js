const pool = require('./connect');
const fs = require('fs');
const async = require('./asyncify');



const query = async (name, pass) => {
    try {
    
   
        return async(pool.register.getConnection(function(err, con) {
        if (err) throw err;
    
    con.query(`INSERT INTO data (username, password) VALUES ("${name}", "${pass}");`, function(err, result, _fields) {
       if (err) throw err;
        con.release();
   
        const results = result;


        /*
        const category = {
            [categoryName] : {
           one: { 
               id: results[0].id,
               name: results[0].name,
               price: results[0].price
           },
           two: {
               id: results[1].id,
               name: results[1].name,
               price: results[1].price
           },
           three: {
               id: results[2].id,
               name: results[2].name,
               price: results[2].price
           },
           four: {
               id: results[3].id,
               name: results[3].name,
               price: results[3].price
           },
           five: {
               id: results[4].id,
               name: results[4].name,
               price: results[4].price
           },
           six: {
               id: results[5].id,
               name: results[5].name,
               price: results[5].price
           },
        }
        };
       */
      }); //query
    }));

    } catch (err) {
        console.log(err);
    };
};

module.exports = query;
const pool = require('./connect');
const fs = require('fs');
const async = require('./asyncify');



const query = async (name, pass) => {
    try {
    
   
        return async(pool.register.getConnection(function(err, con) {
        if (err) throw err;
       
    con.query(`SELECT * FROM data WHERE username="${name}" AND password="${pass}";`, function(err, result, _fields) {
       if (err) throw err;
       
     
       if (result === undefined) {
           console.log('wrong')
           con.release()
         
       } else if (result !== undefined) {
           console.log('right')
           con.release()
          
    
        
       }
      
    
      }); //query
    }));

    } catch (err) {
        console.log(err);
    };
};

/*
var results = JSON.stringify(result)
       console.log(result.username)
       if (result[0] || result[1] === undefined)
       {con.release()
        
       
           return ''
       } else if (result[0] === name && result[1] === pass) {
       verified = true;
       console.log('here', verified)
        con.release();
       
       
       }

*/
module.exports = query;
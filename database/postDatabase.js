const query = require('./queryDb');
const categories = require('./categories');

const writeDatabase = async (name, pass) => {
try {
    
    const queries = await query(name, pass)
    return queries;
} catch (err) {
    console.log(err);
}
}
module.exports = writeDatabase
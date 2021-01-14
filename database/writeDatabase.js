const query = require('./queryDatabase');
const categories = require('./categories');

const writeDatabase = async (serve) => {
try {
    await serve;
    const queries = [
        query('shoes', categories.shoes, '../jsonData/shoes.json'),
        query('shirts', categories.shirts, '../jsonData/shirts.json'),
        query('pants', categories.pants, '../jsonData/pants.json'),
        query('hats', categories.hats, '../jsonData/hats.json'),
        query('jewelry', categories.jewelry, '../jsonData/jewelry.json'),
        query('gloves', categories.gloves, '../jsonData/gloves.json')
    ];
    return queries;
} catch (err) {
    console.log(err);
}
}
module.exports = writeDatabase
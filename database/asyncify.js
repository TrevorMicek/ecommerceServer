module.exports = async (cb) => {
    try {
        const query = await cb;
        return query;
    } catch (err) {
        console.log(err);
    }
}


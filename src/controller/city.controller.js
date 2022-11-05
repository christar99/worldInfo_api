const City = require('../model/city');

const record = {
    findByIdx: ((req, res) => {
        City.findByIdx(req, (err, city) => {
            if(err) res.send(err);
            res.send(city);
        })
    })
}

module.exports = record;
const Nations = require('../model/nations');

const record = {
    findByName: ((req, res) => {
        Nations.findByName(req, (err, nation) => {
            if(err) res.send(err);
            res.send(nation);
        })
    })
};

module.exports = record;

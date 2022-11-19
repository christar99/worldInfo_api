const connection = require("./index");

let Nations = (nation) => {
    this.nation.name = nation.name;
};

Nations.findByName = (req, result) => {
    let query =
        req.query.name === undefined
            ? "SELECT * FROM nation_list"
            : "SELECT * FROM nation_list WHERE name = ?";

    connection.query(query, [req.query.idx], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Nations;

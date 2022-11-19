const connection = require("./index");

let City = (city) => {
    this.city.name = city.name;
};

City.findByIdx = (req, result) => {
    let query =
        req.query.name === undefined
            ? "SELECT * FROM city"
            : "SELECT * FROM city WHERE name = ?";

    connection.query(query, [req.query.idx], (err, res) => {
        console.log(res);
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = City;

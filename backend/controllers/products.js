const client = require('../configs/database');

exports.products = (req, res) => {
    const { email, productname, price } = req.body;
    console.log(req);
    // req.body = email;
}
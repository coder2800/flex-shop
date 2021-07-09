const jwt = require('jsonwebtoken');
const client = require('../configs/database');

exports.verifyToken = (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(500).json({
                error: "Server error found"
            })
        }
        console.log(decoded.email);
        const userEmail = decoded.email;
        client.query(`SELECT * FROM login WHERE email = '${userEmail}'`)
            .then((data) => {
                // console.log(data);
                if (data.rows.length == 0) {
                    res.status(404).send("Token not verified");
                }
                else {
                    // console.log(userEmail);
                    req.email = userEmail;
                    res.status(200).send("Email verified");
                    next();
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).json({
                        message: "Database error occurred",
                        error: err,
                    })
                }

            })
    })
}
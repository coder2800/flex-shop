const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const client = require('../configs/database');


exports.signUp = (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, " ", email, " ", password);
    // res.send("Everything is fine");

    //Check if user is already exists or not

    client.query(`SELECT * FROM login WHERE email = '${email}';`).then((data) => {
        console.log(data);
        isValid = data.rows;
        if (isValid.length != 0) {
            res.status(404).send("User already exists !");
        } else {

            //Hash Password
            bcrypt.hash(password, 10, function (err, hash) {
                // Store hash in your password DB.
                if (err) {
                    res.status(500).send("Server 500 error ");
                }
                const user = {
                    name, email, password: hash,
                }
                // Data.push(user);
                client.query(`INSERT INTO login(name,email,password) VALUES ('${user.name}', '${user.email}', '${user.password}')`).then(data => {
                    console.log(data);
                    //Generate Token
                    const token = jwt.sign(
                        {
                            email: email,
                        },
                        process.env.SECRET_KEY
                    )
                    // res.status(200).send(hash);
                    res.status(200).json({
                        message: "User has been added successfully",
                        token: token,
                    })
                }).catch((err) => {
                    console.error(err);
                })

            });
        }

    }).catch((err) => {
        console.log(err);
    })


}
exports.signIn = (req, res) => {
    // TODO: signin
    const { email, password } = req.body;
    client.query(`SELECT * FROM login WHERE email = '${email}';`).then((data) => {
        isValid = data.rows;
        if (isValid.length == 0) {
            res.status(200).send("You have not registered!, please Sign Up");
        } else {

            //Hash Password
            bcrypt.compare(password, isValid[0].password, function (err, result) {
                // Store hash in your password DB.
                if (err) {
                    res.status(500).send("Server Error found!");
                } else if (result == true) {
                    //Generate Token
                    const token = jwt.sign(
                        {
                            email: email,
                        },
                        process.env.SECRET_KEY
                    )
                    // res.status(200).send(hash);
                    res.status(200).json({
                        message: "User has been sign in successfully 👍",
                        token: token,
                    })
                } else {
                    res.status(404).json({
                        error: "Unauthorized user. Incorrect Password!",
                    })
                }
            });
        }
    })
}
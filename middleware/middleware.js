const e = require("express");
const data = require("../data.json");

exports.verify = function (req, res, next) {

    if (req.body.username == null || req.body.password == null || !data[req.body.username] ) {
        res.redirect('/login');
    } else {
        const username = req.body.username;
        const password = req.body.password;
        var pass = data[username].password;

        if (password === pass) {
            console.log("You have successfully logged in.");
            return next();
        } else {
            res.redirect('/login');
        }
    }


}

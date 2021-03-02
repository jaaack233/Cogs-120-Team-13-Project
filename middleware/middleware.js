const data = require("../data.json");

exports.verify = function (req, res, next) {

    const username = req.body.username;
    const password = req.body.password;
    var pass = data[username].password;

    console.log(username);

    if (password === pass) {
        console.log("You have successfully logged in.");
        return next();
    } else {
        res.redirect('/login');
    }
}

var data = require('../data.json')

exports.view = function(req, res){
    res.render('login');
};

export.verify = function(req,res) {
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    var name = data.username;
    var pass = data.password; 

    if (username === name && password === pass) {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
}
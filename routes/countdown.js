const data = require('../data.json');


exports.view = function(req, res){
    res.render('countdown');
};

exports.post = function (req, res) {
    const ticket_data = {
        "ticket_val": req.body.ticket_val,
        "ticket_num": req.body.ticket_num
    };
    console.log(ticket_data);
    res.render('countdown',ticket_data);
}
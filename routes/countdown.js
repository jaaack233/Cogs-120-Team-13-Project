const data = require('../data.json');

const tasks = data.jic006.tasks;


exports.view = function(req, res){
    res.render('countdown', task_data);
};

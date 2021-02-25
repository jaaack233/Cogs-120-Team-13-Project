const data = require('../data.json');

const tasks = data.jic006.tasks;

const task_data = {
  "hour": tasks[tasks.length - 1].hour,
  "min": tasks[tasks.length - 1].min,
  "ticket-num": 6,
  "ticket-val": tasks[tasks.length - 1].ticket-val
}

exports.view = function(req, res){
    res.render('countdown', task_data);
};

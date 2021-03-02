
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');


var index = require('./routes/index');
var main = require('./routes/main');
var countdown = require('./routes/countdown');
var taskSetting = require('./routes/taskSetting');
var notiSetting = require('./routes/notiSetting');
var login = require('./routes/login');
var loginAut = require('./js/login');
var indivisual = require('./routes/indivisual');
var groups = require('./routes/groups');
var ticket = require('./routes/ticket');
var rank = require('./routes/rank');
const { Collection } = require('mongoose');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get('/main', main.view);
app.get('/countdown', countdown.view);
app.post('/countdown', countdown.post);
app.get('/tasksetting', taskSetting.view);
app.get('/notisetting', notiSetting.view);
app.get('/login',login.view);
app.get('/loginAut',login.verify);
app.get('/indivisual', indivisual.view);
app.get('/groups', groups.view);
app.get('/tasksetting/ticket',ticket.view);
app.get('/rank', rank.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

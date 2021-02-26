
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var main = require('./routes/main');
var countdown = require('./routes/countdown');
var taskSetting = require('./routes/taskSetting');
var notiSetting = require('./routes/notiSetting');
var login = require('./routes/login');
var indivisual = require('./routes/indivisual');
var groups = require('./routes/groups');
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
app.use(express.urlencoded());
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
app.get('/tasksetting', taskSetting.view);
app.get('/notisetting', notiSetting.view);
app.get('/login',login.view);
<<<<<<< HEAD
app.get('/indivisual', indivisual.view);
app.get('/groups', groups.view);
=======
app.get('/ticket',ticket.view);
>>>>>>> 8314334a1e58ec9bcc48097d1699e7aa2f983cf3

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

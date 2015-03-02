//console.log("Hello from Node");

var express 	  = require('express'),
app 			  = express(),
bodyParser        = require('body-parser'),
mongoose          = require ('mongoose'),
meetupscontroller = require('./server/controllers/meetups-controller-server');
/*
app.get('/', function(req,res)
{
console.log('value of ******** dirname: ', __dirname);
res.sendFile(__dirname + '/client');
});

*/

mongoose.connect('mongodb://localhost:27017/mean-demo');
app.use(bodyParser());
console.log('value of ******** dirname: ', __dirname);
app.use(express.static(__dirname +'/client'));

app.get('/api/meetups' ,meetupscontroller.list);
app.post('/api/meetups' ,meetupscontroller.create);

app.listen(3000,function()
{
console.log('I\'m Listening ...  ');
}
);


//console.log("Hello from Node");

var express 	  = require('express'),
app 			  = express(),
bodyParser        = require('body-parser'),
mongoose          = require ('mongoose'),
meetupscontroller = require('./server/controllers/meetups-controller-server');


mongoose.connect('mongodb://root:root@ds061558.mongolab.com:61558/mean-demo');
app.use(bodyParser());
//console.log('value of ******** dirname: ', __dirname);
app.use(express.static(__dirname +'/client'));

app.get('/api/meetups' ,meetupscontroller.list);
app.post('/api/meetups' ,meetupscontroller.create);


app.listen(process.env.PORT || 5000);
console.log("Server running on port no. 5000");
/*
app.listen(3000,function()
{
console.log('I\'m Listening ...  ');
}
);
*/

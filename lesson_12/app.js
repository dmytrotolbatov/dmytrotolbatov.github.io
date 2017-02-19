var express = require('express');
var Mailgun = require('mailgun-js');

var app = express();
var api_key = 'key-c10e55f06473e1e550c8c63080902278';
var domain = 'sandbox216e1ed674a54a1d98448b79a8264025.mailgun.org';
var from_who = 'skill94@ukr.net';

app.set('view engine', 'jade');
app.set("view options", {layout: false});
app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.render('/index.html');
});
app.get('/submit/:mail', function(req,res) {

    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
        from: from_who,
        to: 'skill94@ukr.net',
        subject: `Hello friend!`,
        html: req.params.mail
    };

    mailgun.messages().send(data, function (err, body) {
        if (err) {
            res.render('error', { error : err});
            console.log("got an error: ", err);
        }
        else {
            res.render('submitted', { email : req.params.mail });
            console.log(req);
        }
    });
});

app.listen(3030);

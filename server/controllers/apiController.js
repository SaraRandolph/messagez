var Messages = require('../models/happyHolidayzModel');
var bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.get('/messages', function(req, res){

        Messages.find({ isSent: true }, function(err,messages) { 
            if(err) throw err;
            res.send(messages);
        });
    });

    app.get('/messages/:recipient', function(req, res){

        Messages.find({ recipient: req.params.recipient }, function(err,messages) { 
            if(err) throw err;

            res.send(messages);
        });
    });

    app.get('/message/:id', function(req, res){
        var ObjectId = require('mongodb').ObjectID;

        Messages.findById({_id:ObjectId(req.params.id)}, function(err, message){
            if(err) throw err;

            res.send(message);
        })
    })


    app.post('/message', function(req, res){
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            
            const msg = {
              to: req.body.recipient,
              from: 'test@example.com',
              subject: 'Happy Holidayzz!',
              text: req.body.message
            };
            sgMail.send(msg);

            var newMessage = Messages({
                recipient: req.body.recipient,
                message: req.body.message,
                isSent: true
            });

            newMessage.save(function(err){
                if (err) throw error;
                res.send('Success');
            });
    
        });

    app.put('/message/:id', function(req, res){
        Messages.findByIdAndUpdate(req.body.id, {message: req.body.message, recipient: req.body.recipient, isSent: req.body.isSent}, function(err, message){
            if (err) throw err;
            res.send('Success');
        })
    })

    app.delete('/message/:id', function(req, res){
        Messages.findByIdAndRemove(req.params.id, function(err){
            if (err) throw error;
            res.send('Success');

        })
    })
}

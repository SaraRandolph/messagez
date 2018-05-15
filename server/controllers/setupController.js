var Messages = require('../models/happyHolidayzModel');

module.exports = function(app) {

    app.get('/api/setupMessages', function(req, res){

        //seed database
        var starterMessages = [
            {
                message: 'Happy Christmas Harry',
                recipient: 'harry@horcurxhunter.com',
                isSent: true
            },
            {
                message: 'Happy Easter Ron',
                recipient: 'ron@crumsux.com',
                isSent: true
            },
        ];

        Messages.create(starterMessages, function(err, results){
            res.send(results);
        });
    });

}
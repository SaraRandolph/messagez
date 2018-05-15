var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var happyHolidayzSchema = new Schema({
    message: String,
    recipient: String,
    isSent: Boolean
});

var Messages = mongoose.model('Messages', happyHolidayzSchema);

module.exports = Messages;
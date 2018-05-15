var configValues = require('./config');


module.exports = {

    //can pass variable for development or production here and it will return different things
    getDbConnectionString: function() {
        // return process.env.MONGODB_URI;
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds131320.mlab.com:31320/happyholidayz';
    }
}
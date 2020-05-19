//figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    //in production - return prod set of key
    module.exports = require('./prod');
} else {
    //we are in dev 
    module.exports = require('./dev');
}
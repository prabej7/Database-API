const fs = require('fs');

const checkFile = (fileName) =>{
    return fs.existsSync(`./Database/${fileName}`);
}

module.exports = checkFile
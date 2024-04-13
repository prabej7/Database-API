const fs = require('fs');
const checkFile = require('./checkFile');

const readFile = (fileName) => {
    let path = `./Database/${fileName}`;
    if (checkFile(fileName)) {
        try {
            const data = fs.readFileSync(path);
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading file:', err);
            return null;
        }
    } else {
        console.log('File not found');
        return null;
    }
};

module.exports = readFile;

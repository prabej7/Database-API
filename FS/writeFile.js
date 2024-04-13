const fs = require('fs');
const checkFile = require('./checkFile');
const readFile = require('./readFile');
const { triggerAsyncId } = require('async_hooks');

const writeFile = (fileName, data) => {
    let path = `./Database/${fileName}`;
    data = JSON.stringify(data)
    if (checkFile(fileName)) {
        try {
            fs.writeFileSync(path, data);
            const readData = readFile(fileName);
            return readData

        } catch (err) {
            console.error(err);
        }

    } else {
        console.log('File not found!');
    }
}

module.exports = writeFile
const fs = require('fs');
const checkFile = require('./checkFile');
const createFile = (fileName) =>{
    let filePath = `./Database/${fileName}`;
    if(!checkFile(fileName)){
        try{
            fs.writeFileSync(filePath,'null')
            return `File created successfully : ${fileName}`
        }catch(err){
            console.err(err);
        }
    }else{
        return 'Database already exists';
    }
};

module.exports = createFile
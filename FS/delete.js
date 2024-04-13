const fs = require('fs');
const checkFile = require('./checkFile');

const deleteFile = (fileName) =>{
    let filePath = `./Database/${fileName}`;
    if(checkFile(fileName)){
        try{
            fs.unlinkSync(filePath);
            return 'Database deleted successfully!';
        }catch(err){
            return err
        }
    }else{
        return 'Database not found!'
    }
}

module.exports = deleteFile;

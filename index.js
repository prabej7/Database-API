const createFile = require('./FS/create');
const writeFile = require('./FS/writeFile');
const readFile = require('./FS/readFile');
const deleteFile = require('./FS/delete');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/createdb/:fileName',async(req,res)=>{
    const data = await createFile(req.params.fileName + '.json');
    res.send(data)
});

app.post('/writedb/:fileName',async(req,res)=>{
    const response = await writeFile(req.params.fileName + '.json',req.body);
    res.send(response);
});

app.get('/readdb/:fileName',async(req,res)=>{
    const data = await readFile(req.params.fileName + '.json');
    res.send(data);
});

app.get('/deltedb/:fileName',async(req,res)=>{
    const response = await deleteFile(req.params.fileName + '.json');
    res.send(response);
})

app.listen(5000,()=>{
    console.log('Server is running at port 5000');
})


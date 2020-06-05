const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send({
        data: 'ererything is ok'
    })
});

app.listen(3001,()=>{
    console.log('response server is start');
})
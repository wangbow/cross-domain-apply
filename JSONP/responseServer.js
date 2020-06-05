const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const callName = req.query.callback;
    const data = JSON.stringify({data:'ererything is ok'});
    res.send(`${callName}(${data})`);
});

app.listen(3001,()=>{
    console.log('response server is start');
})
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen(4000,(err)=>{
if(err) console.log(err);
else{
    console.log("Connect with port ${4000} ");
}
});


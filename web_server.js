const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3600; // port

app.get('/',(req,res) =>{
    res.send('Hi konlak');
}) // '/' refers root file
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

 
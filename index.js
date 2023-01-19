const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res)=>{

    res.send("Great to See you here.. 😀");
})


app.listen(PORT, ()=>{

    console.log(`App is running at ${PORT}`);
})
const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello from docker jenkins 2');
});

app.listen('3000',() => console.log('server is listeinign'));

module.exports = app;
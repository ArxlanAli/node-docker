const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello from docker jenkins 7');
});

app.listen('3000',() => console.log('server is listeinign'));

module.exports = app;
const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello from docker jenkins 12');
});


app.get('/dummy',(req,res) => {
    return res.status(500).send('Something went wrong');
})


app.use((req,res,next) =>{
    let error = new Error('Not Found');
    error.statusCode = 404;
    next(error);
})

app.use((error,req,res,next) => {
    const status = error.statusCode || 500;
    return res.status(status).send(error.message);
})

app.listen('3000',() => console.log('server is listening'));

module.exports = app;
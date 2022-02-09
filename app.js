const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use('/', require('./router'));

app.listen(port);
console.log('Server on port', port);
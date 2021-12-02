// const lodash = require('lodash');
// let example = lodash.fill([1,2,3,4,5], "banana",1,3);
// console.log(example);

/*
// Introduction to Express
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello world");
});

app.get('/example', (req,res)=>{
    res.send("hmm Nice");
});

app.get('/example/:name/:age', (req,res)=>{
    console.log(req.params);
    // res.send("Check Console Bro");
    console.log(req.query);
    res.send(req.params.name+ ":"+ req.params.age);
});

app.listen(3000);
*/

/*
// INTRODUCTION
const express = require('express');
const path = require('path');
const app = express();

// use is using alias for the static folder
app.use('/public', express.static(path.join(__dirname,'static')));              


app.get('/', (req,res)=>{
    // res.send('Hello world');
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.listen(3000);
*/



const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


// use is using alias for the static folder
app.use('/public', express.static(path.join(__dirname,'static')));              
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    // res.send('Hello world');
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/', (req,res)=>{
    console.log(req.body);
    // database work
    // res.send("Successfully Posted");
    res.json({success:true});
});

app.listen(3000);
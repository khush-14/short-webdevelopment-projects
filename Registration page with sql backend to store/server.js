const express = require('express');
const path = require('path');
const { db,tasks } = require('../registration/js/db');
const app = express()
const PORT = 3000 || process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'/html')))

app.use('/css',express.static('css'));
app.use('/js',express.static('./js/'));

app.get('/userdetails',async(req,res)=>{
    const task = await tasks.findall();
    alert('2nd');
    res.json(task);
})
app.post('/userdetails',async (req,res)=>{
    const task = await tasks.create({
        name:req.body.name,
        rollNumber : req.body.rollNumber,
        tripname:req.body.tripname,
        gender : req.body.gender,
        email : req.body.email
    })
    .catch((err)=>{
        throw err;
    })
    console.log('3rd');
    console.log(task);
    res.json({success:true})
})

db.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log("server started on  http://localhost:3000")
        })
    })
    .catch((err)=>{
        throw err
    })
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const curriculums = require('./data/curriculum.json');

app.use(cors());

app.get('/' , (req ,res)=>{
    res.send('Cyber Education server is running');
})

app.get('/curriculum', (req, res)=>{
    res.send(curriculums)
});

app.get('/curriculum/:id' , (req , res) =>{
    const id = req.params.id;
    curriculumById = curriculums.find( cur => cur.id === id);

    res.send(curriculumById);
})

app.listen(port, () => {
    console.log('app is running at',port);
})
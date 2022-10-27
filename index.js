const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const curriculums = require('./data/curriculum.json');
const cateCurriculum = require('./data/cate.json');

app.use(cors());

app.get('/' , (req ,res)=>{
    res.send('Cyber Education server is running');
})

app.get('/curriculum', (req, res)=>{
    res.send(curriculums)
});

app.get('/cate', (req, res)=>{
    res.send(cateCurriculum)
});
app.get('/cate/:id', (req, res)=>{
    const id = req.params.id;
   const curriculumCateById = curriculums.filter( cur => cur.cate_id === id);
    res.send(curriculumCateById)
});

app.get('/curriculum/:id' , (req , res) =>{
    const id = req.params.id;
   const curriculumById = curriculums.find( cur => cur.id === id);

    res.send(curriculumById);
})

app.get('/feature' , (req , res) =>{
   const feature = curriculums.filter( cur => cur.isFeatured === true);
    res.send(feature);
})
app.get('/special' , (req , res) =>{
   const special = curriculums.filter( cur => cur.isSpecial === true);
    res.send(special);
})
app.get('/hot' , (req , res) =>{
   const hot = curriculums.filter( cur => cur.isHot === true);
    res.send(hot);
})
app.get('/new' , (req , res) =>{
   const newItem = curriculums.filter( cur => cur.isNew === true);
    res.send(newItem);
})
app.get('/price' , (req , res) =>{

    const sort = curriculums.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
   
    res.send(sort);
})
app.get('/price/des' , (req , res) =>{

    const sort = curriculums.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
   
    res.send(sort);
})

app.get('/rating' , (req , res) =>{

    const sort = curriculums.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
   
    res.send(sort);
})
app.get('/rating/desc' , (req , res) =>{

    const sort = curriculums.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
   
    res.send(sort);
})


app.listen(port, () => {
    console.log('app is running at',port);
})
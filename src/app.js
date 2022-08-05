const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const db = require('./db/conn');
const userData = require('./models/schema');


const app = express();
const staticPath = path.join(__dirname,'../public/');
const viewsPath = path.join(__dirname,'../templates/views/');
const partialsPath = path.join(__dirname,'../templates/partials/');

app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/',async (req,res)=>{
    try {
        const data = new userData({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        })
        const result = await data.save();
        res.status(200).render('index');
    } catch (error) {
        console.log(error);
        res.send('Something Went Wrong')
    }
});
app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
});
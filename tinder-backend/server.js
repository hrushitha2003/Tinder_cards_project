import express from 'express';
import mongoose from 'mongoose';
import Cards from 'dbCards';
import Cors from 'cors';
//app config
const app=express();//it will create an instance
const port = process.env.PORT || 8001;
const connection_url='mongodb+srv://admin:c6A1pVydppLm5BQ9@cluster0.ojh4jil.mongodb.net/?retryWrites=true&w=majority';
//middleware

app.use(express.json());
app.use(Cors());
//db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
//api endpoint
app.get('/',(req,res)=> res.status(200).send("hello hey"));

app.post('/tinder/card',(req,res)=>{
    const dbCard=req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});
//listener
app.listen(port,()=> console.log(`listening on local host: ${port}`));
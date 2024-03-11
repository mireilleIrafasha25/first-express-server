const express=require('express');
const app=express()


app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello from your Express server!');
  });


app.post('/add',(req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    res.json({message:`Thanks for signing in your name is ${name} and email ${email}`})
})

app.listen(3000,()=>
{
    console.log("server listening port 3000")
})
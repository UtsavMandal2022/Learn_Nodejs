const express=require('express');

const app=express();

app.listen(5000);

app.get('/',(req,res)=>{
    // res.send('<p>home ...</p>');
    res.sendFile(__dirname+'/webfront/index.html');
});

app.get('/form',(req,res)=>{
    res.sendFile('/webfront/form.html',{root : __dirname});
});

app.get('/formfill',(req,res)=>{
    res.redirect('/form');
});

app.use((req,res)=>
{
res.status(404).sendFile(__dirname+'/webfront/404.html');
});
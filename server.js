const http=require('http');
const fs=require('fs');
const _=require('lodash');

const server=http.createServer((req,res)=>{
    // console.log(req);
    // console.log('Request made');
    // console.log(req.url,req.method);
    // res.setHeader('Content-type','text/plain');
    // res.write('Hello world!');

    let n=_.random(0,20);
    console.log(n);
    
    res.setHeader('Content-type','text/html');
    let path='D:/nodejs/webfront/';
    switch(req.url)
    {
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/form':
        path+='form.html';
        res.statusCode=200;
        break;
        case '/form-fill':
            res.setHeader('Location','/form');
            res.statusCode=301;
            res.end();
        case '/hmm':
            path+='hmm.html';
            res.statusCode=200;
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost',()=>{
    console.log('listening for request on port 3000...');
});
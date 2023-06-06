// console.log(global);
// setTimeout(()=>{
//     console.log('every 3 secs');
//     clearInterval(int);
// },3000);

// const int = setInterval(()=>{
//     console.log('1 sec');
// },1000);

// console.log(__filename);
// console.log(__dirname);

//require

// const xyz=require('./people');
// console.log(xyz);

// console.log(xyz.cw,xyz.age);
// console.log(xyz.hi);

//importing certain properties

// const {age }=require('./people');
// console.log(age);

// const os=require('os');
// console.log(os.platform(),os.homedir());

//file handling

// const fs=require('fs');

//reading 

// fs.readFile('./docs/doc1.txt',(err,data)=>{
// if(err)
// {
//     console.log(err);
// }
// else console.log(data.toString());
// });

// console.log('end of the program!');

//writing files

// fs.writeFile('./docs/doc1.txt','hello world', ()=>{
// console.log('written');
// });

// fs.writeFile('./docs/deleteme.txt','hello again', ()=>{
//     console.log('written');
//     });


//directories mk and rm

// if(!fs.existsSync('./resources'))
// {
//     fs.mkdir('./resources',(err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else console.log('created folder');
//         });
// }
// else
// {
//     fs.rmdir('./resources',(err)=>{
// if(err)
// {
//     console.log(err);
// }
// else console.log('removed folder');
//     });
// }

// // deleting files

// if(fs.existsSync('./docs/deleteme.txt'))
// {
// fs.unlink('./docs/deleteme.txt',(err)=>{
// if(err)
// {
//     console.log(err);
// }
// else console.log('removed file');
// })
// }
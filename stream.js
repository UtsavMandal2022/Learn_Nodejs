const fs=require('fs');

const readstream=fs.createReadStream('./docs/doc3.txt',{encoding:'utf8'});
const writestream=fs.createWriteStream('./docs/doc4.txt');

// readstream.on('data',(chk)=>
// {
// console.log('---NEW CHUNK-----');
// // console.log(chk);
// writestream.write('\nNew Chunk\n');
// writestream.write(chk);
// });

//piping

readstream.pipe(writestream);
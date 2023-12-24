const fs = require('fs');
const path = require('path');

const read = fs.createReadStream(path.join(__dirname, '/data.txt'),{
    encoding: 'utf8',
    highWaterMark:2
})
let data = '';
read.on('data',(chunk) => {
    data+=chunk;
})

read.on("end",() => {
    console.log(data);
})
read.on('error',(err) => {
    console.error(err);
})

// const write = fs.createWriteStream(path.join(__dirname,'data.txt'));
// write.write("hellow world how are you",'utf8');
// write.end();
// write.on('finish',()=>console.log("finished"))
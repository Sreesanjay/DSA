const fs = require('fs');
const path = require('path');
const read = fs.createReadStream(path.join(__dirname, '/data.txt'))
let data = '';
read.setEncoding('utf8')
read.on('data',(chunk) => {
    data+=chunk;
})

read.on("end",() => {
    console.log(data);
})
read.on('error',(err) => {
    console.error(err);
})
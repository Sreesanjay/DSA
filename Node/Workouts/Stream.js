const fs = require('fs');
const path = require('path');

// const writeStream = fs.createWriteStream(path.join(__dirname, 'data.txt'),{
//     encoding: 'utf8',
//     highWaterMark:2
// });

// writeStream.write("hwllo world hsi");
// writeStream.end();
// writeStream.on('finish',()=>console.log("finished"));
// writeStream.on('error',()=>console.error("error"))


// fs.readFile(path.join(__dirname, 'data.txt'),"utf8",(err, data)=>{
//     if(err) console.error(err);
//     else console.log(data);
// })

fs.writeFile(path.join(__dirname, 'data.txt'),"hellow",(err)=>{
    if(err) console.error(err);
    else console.log("success");
})
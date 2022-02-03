const fs = require('fs');

// fs.readFile('./readme.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => { 
    console.log(chunk.toString());
    console.log('data :', chunk, chunk.length);
    data.push(chunk);
});

readStream.on('end', () => {
    console.log('end');
    const s = Buffer.concat(data).toString();
    console.log(s);
});

readStream.on('error', (err) => {
    console.log('error :', err)
});
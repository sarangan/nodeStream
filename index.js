const buff = Buffer.from('Hello World');

console.log(buff);
console.log(buff.length);
console.log(buff.toString());

const array = [Buffer.from('skip '), Buffer.from('skip '), Buffer.from('skipping ')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);
console.log('alloc() size:', buffer3.length);

const buffer4 = Buffer.allocUnsafe(3);
console.log('alloc():', buffer4);
console.log('alloc() size:', buffer4.length);

/*
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
11
Hello World

concat(): skip skip skipping 

alloc(): <Buffer 00 00 00 00 00>
alloc() size: 5

alloc(): <Buffer 00 00 00>
alloc() size: 3
*/
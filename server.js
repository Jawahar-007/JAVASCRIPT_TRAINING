let num = 5.9;

const os = require('os');
console.log(Math.floor(num))
console.log(`Items (${1+1}): $${(num*10+3176)/100}`)

/*
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.version());
console.log(os.homedir()) 
console.log(__dirname);
console.log(__filename);
console.log("------");
*/
const math = require('./math.js');

console.log(math.add(5,3));
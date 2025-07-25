
const fs = require('fs');
const path = require('path');

const timestamp = Date.now() 

fs.readFile(path.join(__dirname,'files','start.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  });

fs.writeFile(path.join(__dirname,'files','receive.txt'),'Message received in receive.txt', (err) => {
  if (err) throw err;
  console.log('Writing Done!!');
  fs.appendFile(path.join(__dirname,'files','receive.txt'),`\n Receives text from start.txt on ${timestamp}`, (err) =>{
  if (err) throw err;
  console.log('Appending Completed')
  fs.rename(path.join(__dirname,'files','receive.txt'),path.join(__dirname,'files','end.txt'),(err) =>{
    if(err) throw err
    console.log('Renaming Completed');
  })
  })
});
process.on('uncaughtException', (err) => {
  console.error(`There was an Uncaught Exception: ${err}`);
  process.exit(1);
});
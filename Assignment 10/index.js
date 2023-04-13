const fs = require('fs');

const readStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('output.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
});

writeStream.on('finish', () => {
  console.log('Data has been written to output.txt');
});
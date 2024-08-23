const fs = require('fs');
const readline = require('readline');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' });
  const writeStream = fs.createWriteStream(__dirname + '/data/output-multi-number', { encoding: 'utf8' });

  const rl = readline.createInterface({
    input: readStream
  });

  for await (const chunk of rl) {
    console.log(chunk);

    const multiTwo = parseInt(chunk.trim()) * 2;

    writeStream.write(multiTwo + '\n')
  }

  readStream.close();
  writeStream.close();
})()

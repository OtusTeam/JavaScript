const fs = require('fs');
const { Transform } = require("stream");

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-string', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-uppercase-string', { encoding: 'utf8' });

  const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
      // chuck - это не строка, а buffer
      console.log(chunk);

      callback(null, chunk.toString().toUpperCase());
    },
  });

  readStream.pipe(uppercaseTransform).pipe(writeStream);
})()

// highWaterMark

const fs = require('fs');
const { Transform } = require("stream");

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-string', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-uppercase-string', { encoding: 'utf8' });

  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    },
  });


  readStream.pipe(uppercase).pipe(writeStream);
})()

// Читаем кусочками данные
// Можем менять состояние эти данных API

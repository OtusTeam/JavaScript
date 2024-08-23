const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' })

  let data = ''

  for await (const chunk of readStream) {
    data += chunk
  }

  console.log(data)
})()

// Read stream // только на чтение
// Write stream // только на запись
// Duplex stream // и так и так
// Transform stream // стрим для преобразование.

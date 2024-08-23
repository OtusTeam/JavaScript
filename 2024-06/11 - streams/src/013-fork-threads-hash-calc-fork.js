const crypto = require('crypto');

process.on('message', (data) => {
  const result = calcHashes(data.count);

  process.send(result);
});

function calcHashes(count = 100) {
  console.time('calc-hash');

  const hashes = [];

  for (let i = 0; i < count; i++) {
    const randomStr = crypto.randomBytes(256).toString('hex')
  
    const hash = crypto.createHash('sha256');
    hash.update(randomStr);
    
    hashes.push(hash.digest('hex'));
  }
  
  console.timeEnd('calc-hash');

  return hashes;
}

;(async() => {
  const obj = { key: 'value' };

  console.log('before', obj.stack);

  Error.captureStackTrace(obj);

  console.log('after', obj.stack);
})()

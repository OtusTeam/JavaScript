const trimImage = require('trim-image');
const fs = require('fs');
const path = require('path');
const where = process.argv[3] || 'assets/icons/'

console.log(`Transform images inside: ${where}`)

const allFilesSync = (dir, fileList = []) => {
  console.log('dir', dir)
  fs.readdirSync(dir).forEach(file => {
    console.log('file', file)
    const filePath = path.join(dir, file)
 
    fileList.push(
      fs.statSync(filePath).isDirectory()
        ? {[file]: allFilesSync(filePath)}
        : file
    )
  })
  
  return fileList
}
 

const images = allFilesSync(where)
  .filter((filename) => filename.match && filename.match(/\.png$/));
 
images.forEach((filename) => {
    trimImage(path.join(where, filename), path.join(where, 'trim', filename), {}, (err) => {
        if (err) {
          console.log(err);
          return;
        }
    });
});
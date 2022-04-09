const fs = require('fs')

console.time('read:: ')
fs.readFile('../sample/bigvideo001.mp4', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
    console.timeEnd('read:: ')
  }
})
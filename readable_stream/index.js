const fs = require('fs')

const rs = fs.createReadStream('../sample/video001.mp4')
const ws = fs.createWriteStream('../sample/video001-copy.mp4')

rs.on('close', () => console.log('rs closed!'))
ws.on('close', () => console.log('ws closed!'))

rs.on('error', (err) => {
  console.error(err)
  ws.close()
})

rs.on('readable', () => {
  let chunk;
  while(chunk = rs.read()) {
    ws.write(chunk)
  }
})

rs.on('end', () => {
  ws.end()
})
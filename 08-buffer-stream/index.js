/*
// Buffer
let buffer = Buffer.from('nodejs')

console.log(buffer)
console.log(buffer[0])
console.log(buffer.toString())
console.log(buffer.toJSON())
console.log(typeof buffer)

const buffer2 = Buffer.from([110, 111, 100, 101, 106, 115])
console.log(buffer2.toString())
*/



/*
// read stream
const fs = require('fs')

const streamData = fs.createReadStream('./file.txt')

streamData.on('ready', () => console.log('Data Ready to read stream.'))

streamData.on('data', chunk => {
    console.log('chunk of the data received !')
    console.log('chunk : ', chunk)
})

streamData.on('error', error => {
    console.log('get error when read data !')
    console.log('error : ', error)
})

streamData.on('end', () => console.log('action of read stream ended.'))
*/



/*
// write stream
const fs = require('fs')

const readStreamData = fs.createReadStream('./file.txt')

const writeStreamData = fs.createWriteStream('./write.txt')

readStreamData.on('ready', () => console.log('Data Ready to read stream.'))

readStreamData.on('data', chunk => {
    writeStreamData.write(chunk)
    console.log('chunk of the data received !')
})

readStreamData.on('error', error => {
    console.log('get error when read data !')
    console.log('error : ', error)
})

readStreamData.on('end', () => console.log('action of read stream ended.'))
*/



/*
// stream with pipes
const fs = require('fs')
const readStreamData = fs.createReadStream('./file.txt')
const writeStreamData = fs.createWriteStream('./write.txt')

readStreamData.pipe(writeStreamData)
*/



/*
// stream with pipes & http
const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    const readStreamData = fs.createReadStream('./file.txt')
    res.writeHead(200, { 'content-type': 'text/plain' })
    readStreamData.pipe(res)
}).listen(3000, () => console.log('http://localhost:3000'))
*/





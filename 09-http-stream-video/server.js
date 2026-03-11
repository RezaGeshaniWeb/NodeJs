const { createReadStream, statSync } = require('fs')
const http = require('http')
const fileName = './black-video.webm'

http.createServer(async (req, res) => {
    const readStream = createReadStream(fileName)
    const { size } = statSync(fileName)
    const range = req.headers.range
    if (range) {
        let [start, end] = range.replace(/bytes=/, '').split('-')
        start = parseInt(start, 10)
        end = end ? parseInt(end, 10) : size - 1
        res.writeHead(206, {
            'content-range': `bytes ${start}-${end}/${size}`,
            'accept-ranges': 'bytes',
            'content-length': (end - start) + 1,
            'content-type': 'video/webm',
        })
        createReadStream(fileName, { start, end }).pipe(res)
    } else {
        res.writeHead(200, {
            'content-length': size,
            'content-type': 'video/webm',
        })
        readStream.pipe(res)
    }
}).listen(3000)
console.log(`listen to port 3000 : http://localhost:3000`)

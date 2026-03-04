const path = require('path')

console.log('mongodb' + path.sep + 'data' + path.sep + 'users')

console.log('mongodb' + path.delimiter + 'data' + path.delimiter + 'users')

console.log(path.basename('mongodb/data/users/index.html'))

console.log(path.basename('mongodb/data/users/index.html', '.html'))

console.log(path.dirname('/mongodb/data/users/index.html'))

console.log(path.extname('/mongodb/data/users/index.html'))

console.log(path.join('/', 'chapter2', 'lesson4', 'model', 'product.model.js'))

console.log(path.isAbsolute('/', 'chapter2', 'lesson4', 'model', 'product.model.js'))

console.log(path.parse('/chapter2/lesson4/model/product.model.js'))

console.log(path.normalize('c://chapter2/lesson4/model//product.model.js'))

console.log(__dirname)

console.log(__filename)



const os = require('os')

const currentOS = {
    name: os.type(),
    arch: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version(),
    uptime: os.uptime(),
    userInfo: os.userInfo(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces()
}

console.log(currentOS)
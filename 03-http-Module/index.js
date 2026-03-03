const http = require('http')
const PORT = 3000
const ProductController = require('./controller/product.controller')

const server = http.createServer((req, res) => {
    if (req.url == '/api/products' && req.method == 'GET') {
        ProductController.get(req, res)
    } else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method == 'GET') {
        ProductController.getById(req, res)
    } else if (req.url == '/api/products' && req.method == 'POST') {
        ProductController.create(req, res)
    } else {
        res.writeHead(404, { "content-type": "application/json" })
        res.write(JSON.stringify({ message: 'route not found' }))
        res.end()
    }
})

server.listen(3000, () => console.log(`http://localhost:${PORT}`))

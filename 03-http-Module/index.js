const http = require('http')
const PORT = 3000
const BASE_URL = '/api/products'
const ProductController = require('./controller/product.controller')

const server = http.createServer((req, res) => {
    const { url, method } = req

    if (url == BASE_URL && method == 'GET') {
        ProductController.get(req, res)
    } else if (url.match(/\/api\/products\/[0-9]+/) && method == 'GET') {
        ProductController.getById(req, res)
    } else if (url == BASE_URL && method == 'POST') {
        ProductController.create(req, res)
    } else if (url.match(/\/api\/products\/[0-9]+/) && method == 'PUT') {
        ProductController.update(req, res)
    } else if (url.match(/\/api\/products\/[0-9]+/) && method == 'DELETE') {
        ProductController.remove(req, res)
    } else {
        res.writeHead(404, { "content-type": "application/json" })
        res.write(JSON.stringify({ message: 'route not found' }))
        res.end()
    }
})

server.listen(3000, () => console.log(`http://localhost:${PORT}`))

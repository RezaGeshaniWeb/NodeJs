const ProductModel = require("../model/product.model")

async function get(req, res) {
    const products = await ProductModel.get()
    res.writeHead(200, { "content-type": "application/json" })
    res.write(JSON.stringify(products))
    res.end()
}

async function getById(req, res) {
    const [, , , id] = req.url.split('/')
    const product = await ProductModel.getById(Number(id))
    if (!product) {
        res.writeHead(404, { "content-type": "application/json" })
        res.write(JSON.stringify({ message: 'product not found' }))
        res.end()
    } else {
        res.writeHead(200, { "content-type": "application/json" })
        res.write(JSON.stringify(product))
        res.end()
    }
}

async function create(req, res) {
    try {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk.toString()
        });

        req.on('end', async () => {
            const product = { id: Date.now(), ...JSON.parse(body) }
            const result = await ProductModel.create(product)
            res.writeHead(201, { "content-type": "application/json" })
            res.write(JSON.stringify({ message: 'product created successfully!', receivedData: product }))
            res.end()
        })
    } catch (error) {
        console.log(error)
    }
}

async function update(req, res) {
    const id = req.url.split('/')[3]

    let body = ''

    req.on('data', (chunk) => {
        body += chunk.toString()
    })

    req.on('end', async () => {
        const parsedBody = { ...JSON.parse(body) }
        const product = await ProductModel.getById(id)
        if (!product) {
            res.writeHead(404, { "content-type": "application/json" })
            res.write(JSON.stringify({ message: 'product not found' }))
            res.end()
        } else {
            const result = await ProductModel.update(id, parsedBody)
            res.writeHead(200, { "content-type": "application/json" })
            res.write(JSON.stringify({ message: 'product updated successfully!', receivedData: product }))
            res.end()
        }
    })
}

const ProductController = { get, getById, create, update }

module.exports = ProductController

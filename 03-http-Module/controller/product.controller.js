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
    let body = ''

    req.on('data', (chunk) => {
        body += chunk.toString()
    });

    req.on('end', async () => {
        try {
            const productData = JSON.parse(body)

            await ProductModel.create({
                id: Date.now(),
                name: productData.name || "محصول جدید",
                price: productData.price || 1000000,
                inStock: productData.inStock !== undefined ? productData.inStock : false,
            });

            res.writeHead(201, { "content-type": "application/json" })
            res.write(JSON.stringify({ message: 'product created successfully!', receivedData: productData }))
            res.end()
        } catch (error) {
            res.writeHead(400, { "content-type": "application/json" });
            res.write(JSON.stringify({ message: 'Error processing request body or creating product' }));
            res.end();
        }
    });
}

const ProductController = { get, getById, create }

module.exports = ProductController

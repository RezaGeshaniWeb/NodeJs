const products = require('../data/products.json')

async function get() {
    return new Promise((res, rej) => res(products))
}

async function getById(id) {
    return new Promise((res, rej) => res(products.find(p => p.id == id)))
}

const ProductModel = { get, getById }

module.exports = ProductModel
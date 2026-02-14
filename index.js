// es module
/*
import listCourse, { fName, lName } from "./es.js";

console.log(fName, lName, listCourse)
*/



// common module
/*
const { name, age } = require("./common");
const { inc, dec } = require("./utils");
const products = require("./list");

console.log(name, age);

console.log(inc(10, 20), dec(90, 30));

console.log(products);
*/



// create http 
/*
const http = require('http')
const products = require('./list')

http.createServer((req, res) => {
    // res.writeHead(200, { 'content-type': 'text/plain' })
    // res.write('End Process')
    // res.end()


    // res.writeHead(200, { 'content-type': 'text/html' })
    // res.write('<h1>Hello NodeJs</h1>')
    // res.end()


    // res.writeHead(200, { 'content-type': 'text/xml' })
    // res.write("<XML><Key>I am a Key !</Key></XML>")
    // res.end()


    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify(products))
    res.end()
}).listen(3000, () => {
    console.log('http://localhost:3000')
})
*/



// file system
/*
// read file (async)
const fs = require('fs')

fs.readFile('list.js', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data.toString())
    }
})


// read file (sync)
const dataList = fs.readFileSync('list.js', 'utf-8')
console.log(dataList)


// write file (async)
const data = 'new text added ...'
fs.writeFile('sample.txt', data, null, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('write in file, Done !')
    }
})


fs.writeFileSync('sample.txt', data)
*/


/*
// append to file (async)
const data = 'the new text append to sample.txt'

const fs = require('fs')

fs.appendFile('sample.txt', data, 'utf-8', err => {
    console.log(err)
})


// append to file (sync)
fs.appendFileSync('sample.txt', data)
*/


// unlink (async)
/*
const fs = require('fs')

fs.unlink('sample.txt', err => {
    if (err) console.log(err)
})


// unlink (sync)
fs.unlinkSync('sample.txt')


// existSync
const checkExistFile = fs.existsSync('sample.txt')

if (checkExistFile) {
    fs.unlinkSync('sample.txt')
} else {
    console.log('not found file !');
}
*/
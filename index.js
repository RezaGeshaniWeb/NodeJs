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
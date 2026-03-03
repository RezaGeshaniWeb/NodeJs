const fs = require('fs')

function readAsyncFile() {
    fs.readFile('package.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data.toString())
        }
    })
}

function readSyncFile() {
    const data = fs.readFileSync('package.json', 'utf-8')
    console.log(data)
}

function writeAsyncFile() {
    let data = 'new data added.'
    fs.writeFile('sample.txt', data, { flag: 'a', encoding: 'utf-8' }, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('writing in file, done !')
        }
    })
}

function writeSyncFile() {
    let data = 'new data added.'
    fs.writeFileSync('sample.txt', data, { flag: 'a', encoding: 'utf-8' })
}

function appendAsyncFile() {
    let data = 'new data added.'
    fs.appendFile('sample.txt', data, 'utf-8', err => {
        if (err) console.log(err)
    })
}

function appendSyncFile() {
    let data = 'new data added.'
    fs.appendFileSync('sample.txt', data)
}

function removeAsyncFile() {
    fs.unlink('sample.txt', err => {
        if (err) console.log(err)
    })
}

function removeSyncFile() {
    const checkExist = fs.existsSync('sample.txt')
    if (checkExist) {
        fs.unlinkSync('sample.txt')
    } else {
        console.log('not found file !')
    }
}


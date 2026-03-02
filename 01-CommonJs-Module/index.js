console.log('Hello NodeJs')


const testString = require('./script1');
console.log(testString)


const { inc, dec } = require('./script2');
console.log(inc(10, 20));
console.log(dec(50, 10));


const { showMessage, showAlert } = require('./script3');
showMessage()
showAlert()
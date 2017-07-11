var fs = require('fs');
var promise = new Promise(function(resolve, reject){
    var success = true;
    fs.readFile('README.txt', 'utf8', function(error, data){
        if(error){
            return reject(error);
        }

        resolve(data);
    })
    // if(success){
    //     resolve('promise fulfilled');
    // } else {
    //     reject(new Error('promise rejected'));
    // }
});

// promise.then(function(result){
//     console.log(result);
// }, function(error){
//     console.error(error.message);
// })


promise.then(function(result){
    console.log(result);
    return 'THE END';
}).then(function(result){
console
});
var fs = require('fs');
var fileName = 'README.txt';

function readCallback(error,data){
    if(error){
        return console.error(error);
    }
    console.log(data);
}

function statcCallback(error,data){
    if(error){
        return console.error(error);
    
    } else if(!status.isFile()){
        return console.error('Not a file');
    }

    fs.readFile(fileName, 'utf8', readCallback);
}

function existsCallback(exist){
    if(!exists){
        return console.error('file does not exist');
    }
    fs.stat(fileName, statCallback);
}

// try {
//     // var data = fs.readFileSync('READM.txt', 'utf8');
//     fs.readFile('READE.txt', 'utf8', function(error,data){
//     if(error){
//         // return console.error(error);
//         throw error;
//         return;
//     }
//     console.log(data);
//     })   
// } catch(error){
//     console.error(error);
// }


//     console.log(data);
// 
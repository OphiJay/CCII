const fs = require('node:fs');
const path = require('node:path');

const STATIC_PATH = process.cwd();

const imgDirect = path.join(__dirname, 'imgs');


fs.readdir(imgDirect, (err, files) => {
    var database = {};


    if(err) {
        console.log('error!')
    }

    files.forEach( (fileName, i) => {
        //console.log(fileName)
        //key = i.toString();

        database[i] = {url : 'imgs/' + fileName};
        console.log(database[i]);

    });

    fs.writeFile('databse.json', JSON.stringify(database), (err, data) => {
        if(err) {
            console.log('error!')
        } else {
            console.log('okee dokee');
        }
    });

});
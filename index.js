const fs = require('fs');
const path = require('path');
const copy = require('./copy');

if (process.argv.length < 3) {
    console.log('Введите папку для копирования и папку, в которую надо копировать:\nnode index.js \'исходная папка\' \'папка назначения\' [-d]');
    process.exit();
}
if (process.argv.length < 4) {
    console.log('Введите папку, в которую надо копировать:\nnode index.js \'исходная папка\' \'папка назначения\' [-d]');
    process.exit();
}

copy.copyDir(path.normalize(process.argv[2]), path.normalize(process.argv[3]));

if (process.argv[4] == '-d') {
    fs.rmdir(base, {recursive: true} , (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
}
console.log("Готово");
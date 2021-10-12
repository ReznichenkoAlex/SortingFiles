const fs = require('fs')
const path = require('path')

exports.copyDir = (base, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }

    const files = fs.readdirSync(base);

    files.forEach(item => {
        let localBase = path.join(base, item);
        let state = fs.statSync(localBase);
        if (state.isDirectory()) {
            exports.copyDir(localBase, dest);
        } else {
            properties = path.parse(item);
            endDir = path.join(dest,properties.name[0].toUpperCase());
            if (!fs.existsSync(endDir)) {
                fs.mkdirSync(endDir)
            }
            if (!fs.existsSync(path.join(endDir, `${item}COPY${properties.ext}`))) {
                fs.link(localBase, path.join(endDir, `${item}COPY${properties.ext}`), err => {
                    if (err){
                        console.log(err);
                    return;
                    }
                })
            }
        }
    })
}
const glob = require('glob');
const fs = require('fs');

// added comment line.
function getFolderSizeByGlob(folder, { ignorePattern: array }) {
    const filePaths = glob.sync('**', { // "**" means you search on the whole folder
        cwd: folder, // folder path 
        ignore: array, // array of glob pattern strings
        absolute: true, // you have to set glob to return absolute path not only file names
    });
    let totalSize = 0;
    filePaths.forEach((file) => {
        console.log('file', file);
        const stat = fs.statSync(file);
        totalSize += stat.size;
    });
    return totalSize;
}


const response = getFolderSizeByGlob('./public', { ignorePattern: [] })

console.log(response);
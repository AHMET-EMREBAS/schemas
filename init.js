const { readdirSync, statSync, copyFileSync, readFileSync, mkdirSync } = require("fs")
const { join } = require("path")



/**
 * 
 * @param {string} folderPath 
 */
function createFoldersRecursively(folderPath) {
    const folders = folderPath.split('/')
    folders.reduce((p, c) => {
        try {
            mkdirSync(p)
        } catch (err) {
            console.error(err);
        }
        return [p, c].join('/')
    })

    try {

        mkdirSync(folderPath);
    } catch (err) {
        console.error(err);
    }
}


/**
 * @param {string[]} fileNames 
 * @param {string} source
 * @param {string} target
 */
function copyFilesRecursively(fileNames, source, target) {
    createFoldersRecursively(target);
    for (const file of fileNames) {
        const filePath = join(__dirname, source, file);
        if (statSync(filePath).isFile()) {
            copyFileSync(filePath, join(target, file))
        } else {
            copyFilesRecursively(readdirSync(filePath), join(source, file), join(target, file))
        }
    }
}


copyFilesRecursively(readdirSync(join(__dirname, 'schemas')), 'schemas', 'ssot/schemas');

const fs = require('fs');
const path = require('path');

const rootFolder = path.resolve(__dirname, './'); // Assuming the root folder is one level above the current script directory

const searchDirectory = async (directory) => {
    try {
        const files = await fs.promises.readdir(directory);
        const promises = files.map(async (file) => {
            const filePath = path.join(directory, file);
            const stat = await fs.promises.stat(filePath);
            if (stat.isDirectory()) {
                console.log(filePath + " is a directory, exploring it further");
                await searchDirectory(filePath);
            } else if (file.endsWith('.js')) {
                console.log(filePath + " is a js file. Begining to process file.");
                await processFile(filePath, stat.birthtime);
            }
        });
        await Promise.all(promises);
    } catch (err) {
        console.error('Error reading directory:', err);
    }
};

const processFile = async (filePath, creationDate) => {
    try {
        if (creationDate.getFullYear() === 2024 && creationDate.getMonth() === 4 && creationDate.getDate() === 6) {
            const data = await fs.promises.readFile(filePath, 'utf8');
            if (
                data.includes("require('url')") ||
                data.includes("require('stream')") ||
                data.includes("require('os')") ||
                data.includes("require('fs')") ||
                data.includes("require('crypto')") ||
                data.includes("require('events')") ||
                data.includes("require('http')") ||
                data.includes("require('https')") ||
                data.includes("require('net')") ||
                data.includes("require('querystring')") ||
                data.includes("require('tls')") ||
                data.includes("require('tslib')") ||
                data.includes("require('util')") ||
                data.includes("require('zlib')") ||
                data.includes("require('child_process')") ||
                data.includes(`require("url")`) ||
                data.includes(`require("stream")`) ||
                data.includes(`require("os")`) ||
                data.includes(`require("fs")`) ||
                data.includes(`require("crypto")`) ||
                data.includes(`require("events")`) ||
                data.includes(`require("http")`) ||
                data.includes(`require("https")`) ||
                data.includes(`require("net")`) ||
                data.includes(`require("querystring")`) ||
                data.includes(`require("tls")`) ||
                data.includes(`require("tslib")`) ||
                data.includes(`require("util")`) ||
                data.includes(`require("zlib")`) ||
                data.includes(`require("child_process")`)
            ) {
                await copyAndModifyFile(filePath);
            }
        }
    } catch (err) {
        console.error('Error processing file:', err);
    }
};

const copyAndModifyFile = async (filePath) => {
    try {
        const directory = path.dirname(filePath);
        const fileContent = await fs.promises.readFile(filePath, 'utf8');

        const modifiedContent = fileContent.replace(/require\(['"]([^'"]+)['"]\)/g, (match, moduleName) => {
            if (
                moduleName.includes('url') ||
                moduleName.includes('stream') ||
                moduleName.includes('os') ||
                moduleName.includes('fs') ||
                moduleName.includes('crypto') ||
                moduleName.includes('events') ||
                moduleName.includes('http') ||
                moduleName.includes('https') ||
                moduleName.includes('net') ||
                moduleName.includes('querystring') ||
                moduleName.includes('tls') ||
                moduleName.includes('tslib') ||
                moduleName.includes('util') ||
                moduleName.includes('zlib') ||
                moduleName.includes('child_process')
            ) {
                console.log("\n\nMatch found\n\n");
                const moduleFilePath = path.join(rootFolder, 'zTest', moduleName + '.js');
                const targetFilePath = path.join(directory, moduleName + '.js');

                // Copy the file from zTest folder to the current directory
                fs.copyFileSync(moduleFilePath, targetFilePath, fs.constants.COPYFILE_EXCL);

                // Modify the require statement to match the new file path
                return `require('./${moduleName}')`;
            }
        });

        await fs.promises.writeFile(filePath, modifiedContent);

        console.log(`\n\nModified file: ${filePath}\n\n`);
    } catch (error) {
        console.error('Error copying and modifying file:', error);
    }
};

// Start searching from the current directory
searchDirectory(path.join(rootFolder, 'node_modules'));

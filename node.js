const fse = require('fs-extra');
fse.ensureDirSync('./firstFolder/');
fse.ensureFileSync('./firstFolder/file.txt');
fse.ensureDirSync('./secondFolder/');
fse.moveSync('./firstFolder/file.txt', './secondFolder/file.txt');

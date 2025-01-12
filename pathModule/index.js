const path = require("path");
const pathModule = require("path");
console.log("filename", path.basename(__filename));

console.log("basename", pathModule.basename(__filename));
console.log("dirname", pathModule.dirname(__filename));
console.log("extname", pathModule.extname(__filename));
// console.log("parse", pathModule.parse(__filename));
// console.log(pathModule.parse(__filename));
// const normalize = pathModule.normalize("/users/.alfjwelkj//../document");
// console.log(normalize);
// console.log(pathModule.join("/user", "module", "path", "category"));
const normalize = path.normalize("/node/../document/data/afaq");
console.log("Normalize: ", normalize);

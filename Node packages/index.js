const lodash = require("lodash");
const names = ["afaq", "ali", "hassan"];
// console.log(lodash.(names));
const item = lodash.map(names, lodash.capitalize);
const item2 = lodash.map(names, lodash.upperCase);
console.log(item);
console.log(item2);

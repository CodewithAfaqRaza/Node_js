console.log("Node js");

console.log("Dirname", __dirname);

console.log("Filename", __filename);

const workSpace = require("./workSpace");
workSpace.greet("Afaq");

console.log(workSpace.add(1, 2));

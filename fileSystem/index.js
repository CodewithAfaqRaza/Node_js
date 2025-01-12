const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "Afaq");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Folder has beeen Created SuccessFully");
}
// sync way of doing it
// const FileName = path.join(dataFolder, "raza.txt");
// fs.writeFileSync(FileName, "Heelo From Afaq");
// console.log("File has been created SuccessDully");
// const readData = fs.readFileSync(FileName, "utf8");
// console.log("File has been Readed SuccessDully", readData);
// fs.appendFileSync(FileName, "\n Heelo raza alkwejflwe From Afaq");
// console.log("File has been Added SuccessDully");

// async way of using Fs Module

const asyncFile = path.join(dataFolder, "waseem.txt");
fs.writeFile(asyncFile, "This Hello is From Waseem", (err) => {
  if (err) throw err;
  console.log("File has been created SuccessDully");
  fs.readFile(asyncFile, "utf8", (err, data) => {
    if (err) throw err;
    console.log("File has been Readed SuccessDully", data);
    fs.appendFile(asyncFile, "\n He is From Bunner", (err) => {
      if (err) throw err;
      console.log("Async Data Added:  SuccessFully");
    });
  });
});

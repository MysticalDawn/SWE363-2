const fs = require("fs");
const process = require("process");

const args = process.argv

console.log("args:", args);



const sourceDir = args[2];
const targetDir = args[3];

console.log("sourceDir:", sourceDir);
console.log("targetDir:", targetDir);


fs.readdirSync(sourceDir, (error, files) => {
  if (error) {
    console.error("can not find directory", error);
    process.exit(1);
  }
  const fileNames = files;
  fileNames = fileNames.filter(
    (file) => file.endsWith(".txt") || file.endsWith(".jpg")
  );
  console.log("Filtered files:", fileNames);
  fileNames.forEach((file) => {
    fs.copyFile(`${source}/${file}`, `${targetDir}/${file}`, (error) => {
      if (error) {
        console.log("can not copy the files.");
        process.exit(1);
      }
      console.log("copied file:", file);
    });
  });
});

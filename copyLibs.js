var fs = require("fs");
var fs_Extra = require("fs-extra");
var path = require("path");

copyDir("three");
copyDir("threeasy");
copyDir("gsap");

function copyDir(dir) {
  var sourceDir = path.join(__dirname, `./node_modules/${dir}`);
  var destinationDir = path.join(__dirname, `./public/libs/${dir}`);

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  fs_Extra.copy(sourceDir, destinationDir, function (error) {
    if (error) {
      throw error;
    } else {
      console.log("success!");
    }
  });
}

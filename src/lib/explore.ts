import fs from "fs";
import path from "path";

export function explore(depth: number) {
  console.log("todo explore", depth);
  let dirPath = ".";

  fs.readdir(dirPath, (err, files) => {
    console.log(files);

    files.forEach((file) => {
      if (fs.statSync(file).isDirectory()) {
        dirPath = path.join(dirPath, file);
        fs.readdir(dirPath, (err, files) => {
          console.log(files);
        });
      }

      console.log(file);
    });
  });
}

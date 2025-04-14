import fs from "fs";
import path from "path";

function printFilesOnly(dirPath: string, depth: number = 0) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);

      try {
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          // Recursively explore subdirectories
          printFilesOnly(fullPath, depth + 1);
        } else if (stats.isFile()) {
          // Print file with indentation
          console.log("  ".repeat(depth) + file);
        }
      } catch (e) {
        console.error("Error with:", fullPath, e);
      }
    });
  });
}

export function explore() {
  printFilesOnly(".");
}

import fs from "fs-extra";
export default function customOutpoutPlugin() {
  return {
    name: "output-file-path-plugin",
    closeBundle() {
      const source = "dist/src/cardetails";
      const destination = "dist/cardetails";
      fs.moveSync(source, destination, { overwrite: true });

      fs.removeSync("dist/src");
    },
  };
}

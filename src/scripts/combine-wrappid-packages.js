import jsonfile from "jsonfile";

const packagePaths = [
  ".wrappid/runtime/mobile/node_modules/@wrappid/core",
  ".wrappid/runtime/mobile/node_modules/@wrappid/native",
  ".wrappid/runtime/mobile/node_modules/@wrappid/styles",
  ".wrappid/runtime/web/node_modules/@wrappid/core",
  ".wrappid/runtime/web/node_modules/@wrappid/native",
  ".wrappid/runtime/web/node_modules/@wrappid/styles",
];

const allPackages = {};

async function fetchPackageInfo() {
  for (const path of packagePaths) {
    try {
      const packageName = path.split("/").pop();
      const packageInfo = await require("child_process").execSync(`npm view --json --prefix ${path}`);

      allPackages[packageName] = JSON.parse(packageInfo);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching package info for ${path}: ${error.message}`);
    }
  }

  jsonfile.writeFileSync("src/scripts/wrappid-packages.json", allPackages, { spaces: 2 });
}

fetchPackageInfo();

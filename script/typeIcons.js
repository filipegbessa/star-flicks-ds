const fs = require("fs");

const fontIcons = fs.readFileSync("./styles/fontIcons.css", "utf8");
const icons = fontIcons.match(/\.icon-[a-zA-Z0-9]+/g);

if (icons && icons.length > 0) {
  const result = `export type IconsType =\n${icons.map((icon) => `  | "${icon.slice(6)}"`).join("\n")};\n`;

  fs.writeFileSync("./types/icons.ts", result);
} else {
  console.error("Error: No icons found.");
}

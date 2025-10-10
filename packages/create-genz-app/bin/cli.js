#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ASCII art banner
const banner = `
╔═══════════════════════════════╗
║                               ║
║#####                #######   ║               
#     # ###### #    #      #    ║       #  ####  
#       #      ##   #     #     ║       # #      
#  #### #####  # #  #    #      ║       #  ####  
#     # #      #  # #   #     ###       #      # 
#     # #      #   ##  #      ###  #    # #    # 
 #####  ###### #    # ####### ###   ####   ####  
║                               ║  
║                               ║
╚═══════════════════════════════╝
`;

console.log(banner);

// Get project name from command line argument
const projectName = process.argv[2] || "my-genz-app";
const projectPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, "..", "src");

// Check if directory already exists
if (fs.existsSync(projectPath)) {
  console.error(`Directory ${projectName} already exists!`);
  process.exit(1);
}

console.log(`\n Creating project: ${projectName}...`);

// Create project directory
fs.mkdirSync(projectPath, { recursive: true });

// Copy all template files
fs.cpSync(templatePath, projectPath, { recursive: true });

// Rename gitignore to .gitignore
const gitignorePath = path.join(projectPath, "gitignore");
if (fs.existsSync(gitignorePath)) {
  fs.renameSync(gitignorePath, path.join(projectPath, ".gitignore"));
}

// Update package.json with actual project name
const pkgPath = path.join(projectPath, "package.json");
let pkgContent = fs.readFileSync(pkgPath, "utf8");
pkgContent = pkgContent.replace("PROJECT_NAME_PLACEHOLDER", projectName);
fs.writeFileSync(pkgPath, pkgContent);

console.log("Project created successfully!");

// Install dependencies
console.log("\n Installing dependencies...\n");

try {
  execSync("npm install", {
    cwd: projectPath,
    stdio: "inherit",
  });
  console.log("\n  All done!");
  console.log(`\nTo get started:`);
  console.log(`  cd ${projectName}`);
  console.log(`  npm run dev`);
} catch (error) {
  console.log("\n  Please run npm install manually");
  console.log(`\nTo get started:`);
  console.log(`  cd ${projectName}`);
  console.log(`  npm install`);
  console.log(`  npm run dev`);
}

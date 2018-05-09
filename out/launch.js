const { exec } = require("child_process")
const join = require("path").join

exec(
  join(__dirname, "node_modules", ".bin", "electron") + " " + __dirname,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  }
)

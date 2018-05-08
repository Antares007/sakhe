const { exec } = require('child_process');

exec(__dirname + '\\node_modules\\.bin\\electron ' + __dirname, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
const { spawn } = require('child_process');

// Example: Run a Docker container and map host port 8080 to container port 8080
const dockerRun = spawn('docker', ['run', '-p', '8080:8080', 'code-pulse-core']);

// Listen for events from the child process
dockerRun.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

dockerRun.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

dockerRun.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

/**
 * Note: When using child_process module to run Docker commands from within a Node.js 
 * application, be cautious about the security implications, as it requires running commands 
 * with elevated privileges. Always validate and sanitize any input that is passed 
 * to the Docker commands to avoid potential security risks.
 */

// If sudo is needed do this: sudo node Server.js

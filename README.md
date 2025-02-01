# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled promise rejections.  The example showcases a simple HTTP server that fails silently if the specified port is already in use, due to a lack of proper error handling. The solution demonstrates how to correctly handle the promise rejection to prevent unexpected crashes.

## Bug
The `bug.js` file contains a basic HTTP server.  It lacks error handling for the `server.listen()` method, which is a promise.  If the port is busy, the promise will reject without notification.

## Solution
The `bugSolution.js` file provides the correct implementation that includes `.catch()` to handle the rejected promise, logging the error and gracefully shutting down the server if it fails to start. This prevents the application from crashing silently.
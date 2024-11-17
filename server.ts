// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import app from './app';

// Specify the port number for the server
const port: number = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
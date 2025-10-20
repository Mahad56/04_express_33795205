// Create a new router
const express = require("express");
const router = express.Router();
const path = require('path'); // needed for /file route

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); 
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) => res.send("<h1>Contact: Mosma003@campus.goldsmiths.ac.uk</h1>"));
router.get("/date", (req, res) => {
  const now = new Date();
  res.send(`<h1>Current date and time: ${now.toString()}</h1>`);
});

//  Extension task
router.get('/welcome/:name', (req, res) => {
  const userName = req.params.name; // Get the name from the URL
  res.send(`<h1>Welcome, ${userName}!</h1>`);
});

router.get('/chain', (req, res, next) => {
  req.message = "First handler ran. ";
  next(); // Pass control to the next handler
}, (req, res) => {
  res.send(`<h1>${req.message}Second handler ran.</h1>`);
});

router.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, '../a.html')); // Make sure a.html exists in project root
});

// Export the router object so index.js can access it
module.exports = router;

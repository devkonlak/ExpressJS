
const express = require ('express');
const router = express.Router();
const path = require('path');

// Serve the root file
router.get(/^\/$|\/index(.html)?/, (req, res) => {
    res.sendFile(path.join(__dirname,'..','views', 'index.html')); // sending index.html as home.
});

// Serve the new-page.html
router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..','views', 'new-page.html')); // sending new-page.html as '/new-page.html'.
});

// Redirect old-page.html to new-page.html with 301 status code
router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); // sending new-page instead of old-page with 301 code
});

module.exports = router
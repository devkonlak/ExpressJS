const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500; // port

// Serve the root file
app.get(/^\/$|\/index(.html)?/, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // sending index.html as home.
});

// Serve the new-page.html
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html')); // sending new-page.html as '/new-page.html'.
});

// Redirect old-page.html to new-page.html with 301 status code
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); // sending new-page instead of old-page with 301 code
});

// Route for hello.html
app.get('/hello(.html)?', (req, res, next) => {
    console.log('try to load hello.html');
    next();
}, (req, res) => {
    res.send("hi hello konlak");
});

// Serve 404.html for any other routes 
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // serving 404.html for any unmatched routes
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

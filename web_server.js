const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3600; // port

// '/' refers root file
app.get('^/$ || /index(.html)?',(req,res) =>{
    res.sendFile(path.join(__dirname,'views','index.html')); // sending index.html as home.
}) 
/** The corrected regular expression ^/$|| /index(.html)? ensures that the route handler matches requests to the root URL, /index, or /index.html. This is useful for cases where you want to serve the same HTML file for multiple similar paths.*/
app.get('/new-page(.html)?',(req,res) =>{
    res.sendFile(path.join(__dirname,'views','new-page.html')); // sending new-page.html as '/new-page.html'.
}) 
app.get('/old-page(.html)?',(req,res)=>{
    res.redirect(301,'new-page.html');// sending new-page insted of old-page with 301 code
})
app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
}) /**This route acts as a catch-all for any requests that don't match previously defined routes. It serves a 404.html file, typically containing a "404 Not Found" error message, to indicate that the requested resource could not be found on the server. */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

  
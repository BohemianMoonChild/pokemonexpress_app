// Loads Express
const express = require('express');




// Import Controller function
const pokemon = require ('./Models/pokemon')



// Set express to variable; initializes the app
const app = express()
const PORT=5000;

// Setup view engine ... ejs is the view engine
app.set('view engine', 'ejs')

// where are our views located? in the Views folder
app.set('views', './Views')



// Root route
app.get('/', (req, res) => {
    // res.render('index', {
    //     pageTitle: "Pokemon Hunters",
    //     pageHeader: "Find the Pokemons",
    // })
})

// new route get handler
app.get('/pokemon', (req,res) => {
    res.render("index", {data:pokemon, 
        pageTitle: "Pokemon Hunters",
        pageHeader: "Find the Pokemons",}) 
})




// App Listener
app.listen(PORT,()=> {
    console.log("server is up")
})
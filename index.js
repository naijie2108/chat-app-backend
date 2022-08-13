const express = require('express')
const app = express()
const port = process.env.PORT || 8000

//Import Routes
const api = require('./routes/api/rootRouter')

// Apply middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log("here")
    next()
})

app.use('/api', api);

// Catch all unhandled requests
app.all('*', (req, res, next) => {
    res.status(400).send("Invalid req")
});

// Error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message ?? err)
})

app.listen(port, () => 
    console.log(`Listening to port ${port}`)
);
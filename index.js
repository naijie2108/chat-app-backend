const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const rootRouter = require('./routes/rootRouter')

// Apply middlewares
app.use(express.json())
app.use('/', rootRouter);

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
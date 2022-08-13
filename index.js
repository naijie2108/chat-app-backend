const express = require('express')
const app = express()
const port = process.env.PORT || 8000

// app.use(express.json())

app.get('/', (req, res, next) => {
    res.send("ok")
});

// error handler
app.use((err, req, res, next) => {
    console.log("error")
    res.status(400).send(err.message)
})

app.listen(port, () => 
    console.log(`Listening to port ${port}`)
);
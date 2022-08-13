const express = require('express');
const router = express.Router();

router.get('/*', (req, res) => {
    res.status(200).send("route success")
});

router.post('/*', (req, res) => {
    res.status(200).send("post success")
})

module.exports = router;
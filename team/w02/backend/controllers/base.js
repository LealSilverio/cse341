function buildBase(req, res) {
    res.send(`../frontend/index.html`)
}

module.exports = { buildBase }
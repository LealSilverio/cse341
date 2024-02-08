function buildIndex(req, res) {
    res.send(
        `<h1>Welcome to my contacts</h1>
            <a href="/contacts">Get All Contacts</a>
            <p>To get a single Contact by ID, please add ID to the end of the url<br>Example: URL/contacts/(insert id number here)</p>
            `)
}

module.exports = { buildIndex }
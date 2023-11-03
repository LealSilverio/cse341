
const buildIndex = (req, res) => {
    res.send('Hello World');
};

const buildNamePage = (req, res) => {
    res.send('Sara Leal Silverio');
};

module.exports = { buildIndex, buildNamePage }

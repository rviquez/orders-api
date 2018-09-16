const data = require('../data.json');

module.exports = (type, subType) => {
    return (req, res, next, value) => {
        const typePlural = `${type}s`;
        let obj = null;

        if (subType) {
            obj = data[typePlural].find(t => t[subType] === (value * 1));
        } else {
            obj = data[typePlural].find(t => t.id === (value * 1));
        }

        if (obj) {
            req[type] = obj;
            next();
        } else {
            res.status(404).send(`Invalid ${type} ID`);
        }
    };
};
const data = require('../../data.json');

module.exports = (req, res) => {
    const status = req.params.status * 1;
    const order = data.orders.filter(m => m.status === status);

    res.status(200).json({
        order
    });
};
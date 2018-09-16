const _orders = require('../../data.json');

module.exports = (req, res) => {
    const orders = _orders.orders;

    res.status(200).json({
        orders
    });
};
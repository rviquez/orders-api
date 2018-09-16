module.exports = (req, res) => {
    const order = req.order;

    res.status(200).json({
        order
    });
};
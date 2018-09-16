const data = require('../../data.json');
const fs = require('fs');

module.exports = (req, res) => {
    console.log(req);
    const orderId = req.body.orderId * 1,
        productId = req.body.productId * 1,
        description = req.body.description,
        price = req.body.price * 1,
        quantity = req.body.quantity * 1;

    let orderData = null;

    fs.readFile(process.cwd() + '/data.json', 'utf-8', (err, data) => {
        if (err) throw err;
        orderData = JSON.parse(data);
               
        let order = orderData.orders.find(m => m.id === orderId);
        
        order.orderLines.push({
            'productId': productId,
            'description': description,
            'price': price,
            'quantity': quantity
        });
        fs.writeFile(process.cwd() + '/data.json', JSON.stringify(orderData, null, 2), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
            res.status(200).json({
                'message': 'added',
                'orderId': orderId,
                'orderLine': {
                    'productId': productId,
                    'description': description,
                    'price': price,
                    'quantity': quantity
                }
            });
        });
    });

};
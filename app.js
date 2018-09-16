const app = require('express')();
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
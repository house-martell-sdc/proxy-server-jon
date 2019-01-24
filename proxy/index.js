const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./router.js');

const PORT = 3005;
const proxy = express();

proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: true }));
proxy.use(cors());
proxy.use(express.static(path.join(__dirname, './public/')));
proxy.use('/api/menus', router);

proxy.listen(PORT, (err) => {
  if (err) { console.error(err); } else {
    console.log('Listening on PORT ', PORT);
  }
});
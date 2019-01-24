const router = require('express').Router();
const axios = require('axios');

router.route('/:rest_id')
  .get((req, res) => {
    const { rest_id } = req.params;
    axios.get(`http://54.183.197.228:80/api/menus/${rest_id}`) // load balancer
      .then(({ data }) => {
        res.send(data);
      });
  });

module.exports = router;
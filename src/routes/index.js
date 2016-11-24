var express = require('express');
var router = express.Router();
import {findById} from "../controller/user_controller";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/user/:id?", findById);

module.exports = router;

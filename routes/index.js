var express = require('express');
var router = express.Router();

const manage_user_route = require('../app/controllers/users/index');
router.use('/manage-users', manage_user_route)




module.exports = router;
const express = require("express");
const multer = require("multer");
const router = express.Router();
const {getUser, createUser} = require("../controllers/userController")
const upload = multer();

router.route('/get_user/:id').get(getUser);
router.route('/create_user/').post(upload.none(), createUser);

module.exports = router;
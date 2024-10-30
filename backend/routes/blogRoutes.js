const express = require("express");
const multer = require("multer");
const router = express.Router();
const {getBlogs, getBlog, createBlog, updateBlog, deleteBlog} = require("../controllers/blogController")
const upload = multer();

router.route('/get_all_blogs').get(getBlogs);
router.route('/get_blog/:id').get(getBlog);
router.route('/create_blog/').post(upload.none(), createBlog);
router.route('/update_blog/:id').put(updateBlog);
router.route('/delete_blog/:id').delete(deleteBlog);

module.exports = router;
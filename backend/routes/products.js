const express = require('express')
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { addProducts } = require('../controllers/products');


router.post("/add", verifyToken, (req, res) => {
    res.send("Middleware working");
})

module.exports = router;
const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.renderViewDashboard);
router.get('/category', adminController.renderviewCategory);

module.exports = router;

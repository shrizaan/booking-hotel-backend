const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.renderViewDashboard);

router.get('/category', adminController.renderViewCategory);
router.post('/category', adminController.addCategory);

router.get('/bank', adminController.renderViewBank);

router.get('/item', adminController.renderViewItem);

router.get('/booking', adminController.renderViewBooking);

module.exports = router;

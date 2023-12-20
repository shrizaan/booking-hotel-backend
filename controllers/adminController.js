const Category = require('../models/Category');

module.exports = {
  renderViewDashboard: (req, res) => {
    res.render('admin/dashboard/view_dashboard');
  },
  renderViewCategory: async (req, res) => {
    const categories = await Category.find();
    res.render('admin/category/view_category', { categories });
  },
  addCategory: async (req, res) => {
    const { categoryName } = req.body;

    await Category.create({ name: categoryName });
    res.redirect('/admin/category');
  },
  renderViewBank: (req, res) => {
    res.render('admin/bank/view_bank');
  },
  renderViewItem: (req, res) => {
    res.render('admin/item/view_item');
  },
  renderViewBooking: (req, res) => {
    res.render('admin/booking/view_booking');
  },
};

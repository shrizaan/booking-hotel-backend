module.exports = {
  renderViewDashboard: (req, res) => {
    res.render('admin/dashboard/view_dashboard');
  },
  renderViewCategory: (req, res) => {
    res.render('admin/category/view_category');
  },
  renderViewBank: (req, res) => {
    res.render('admin/bank/view_bank');
  },
};

class HomeController {
  index(req, res) {
    res.json({ message: 'Welcome to the Home Controller!' });
  }
};

export default new HomeController();

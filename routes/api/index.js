const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

//import api routes from api/index
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
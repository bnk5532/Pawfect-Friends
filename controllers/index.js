const router = require("express").Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const imageRoutes = require('./image-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/img', imageRoutes);

module.exports = router;

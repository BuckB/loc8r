/** Locations Controller */

/** GET home page */
module.exports.home = function (req, res, next) {
    res.render('index', { title: 'Loc8r' });
};
/** GET Location Info page */
module.exports.info = function (req, res, next) {
    res.render('index', { title: 'Location Info' });
};
/** GET Add Review page */
module.exports.addReview = function (req, res, next) {
    res.render('index', { title: 'Add Review' });
};
/** Index Controller */

/** GET home page */
module.exports.index = function (req, res, next) {
    res.render('index', { title: 'Loc8r', user: 'Bruno'});
};

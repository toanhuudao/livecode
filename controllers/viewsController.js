const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.mainPage = (req, res) => {
    res.status(200).render('main', {
    });
}

const Course = require('../models/Course');
const { multipleMongoose } = require('../../ultil/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        // res.render('home');
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongoose(courses),
                });
            })
            .catch(next);
    }
    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const Course = require('../models/Course');
const { mongoose } = require('../../ultil/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongoose(course) });
            })
            .catch(next);
    }
    // [GET] /courses.create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [POST] /courses/stored
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);

        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
}

module.exports = new CourseController();

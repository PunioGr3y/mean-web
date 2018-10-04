/** Gegt 'home' page */
module.exports.homelist = (req, res) => {
    res.render('index', {title: 'Home'});
};

/** Get 'location info' page */
module.exports.locationinfo = (req, res) => {
    res.render('index', {title:'Location info'});
};

/** Get 'Add review' page */
module.exports.addReview = (req, res) => {
    res.render('index', {title:'Add review'});
};
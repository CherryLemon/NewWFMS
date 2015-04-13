function index(req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
}
exports.index = index;
;
function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
}
exports.about = about;
;
function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
}
exports.contact = contact;
;
function upload(req, res) {
    res.render('upload', { title: 'Upload', year: new Date().getFullYear(), message: 'Upload new file.' });
}
exports.upload = upload;
;
//# sourceMappingURL=index.js.map
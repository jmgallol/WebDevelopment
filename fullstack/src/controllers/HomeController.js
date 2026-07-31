import { books } from '../data/books.js';
export class HomeController {
    static index(req, res) {
        const viewData = {};
        viewData["title"] = "Home";
        res.render('home/index', { viewData: viewData });
    }
    static about(req, res) {
        const viewData = {};
        viewData["title"] = "About";
        res.render('home/about', { viewData: viewData });
    }
    static contact(req, res) {
        const viewData = {};
        viewData["title"] = "Contact";
        res.render('home/contact', { viewData: viewData });
    }
    static Main_Point(req, res) {
        const viewData = {};
        viewData["books"] = books;
        res.render('home/books', viewData);
    }
}
//# sourceMappingURL=HomeController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const Articles = require('../models/article');
class ArticlesController {
    getArticle(args) {
        return Articles.find({ url: args['url'] })
            .then((article) => {
            return article[0];
        });
    }
    getArticles(args) {
        return Articles.find({ url: args['url'] })
            .then((article) => {
            return article;
        });
    }
    createArticle(inputObject) {
        return Articles.create(inputObject.article).then((articleInfo) => {
            return articleInfo;
        });
    }
}
exports.ArticlesController = ArticlesController;

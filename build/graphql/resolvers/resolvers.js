"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const article_controller_1 = require("../../controllers/article.controller");
const articlesController = new article_controller_1.ArticlesController();
exports.resolvers = {
    getArticles: (_, args, _info) => {
        return articlesController.getArticles(args);
    },
    getArticle: (_, args, _info) => {
        return articlesController.getArticle(args);
    },
    createArticle: (inputObject) => {
        return articlesController.createArticle(inputObject);
    },
};

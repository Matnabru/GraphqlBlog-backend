"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const Articles = require('../models/article');
const mongoose = require('mongoose');
class ArticlesController {
    getArticle(parametr) {
        return Articles.find({ _id: parametr._id })
            .then((article) => {
            return article[0];
        });
    }
    getArticles(args) {
        return Articles.find().sort({ "createdAt": -1 })
            .then((article) => {
            return article;
        });
    }
    createArticle(inputObject) {
        return Articles.create(inputObject.article).then((articleInfo) => {
            return articleInfo;
        });
    }
    deleteArticle(parametr) {
        return Articles.findOneAndDelete({ _id: parametr._id }).then((article) => {
            return article[0];
        });
    }
}
exports.ArticlesController = ArticlesController;

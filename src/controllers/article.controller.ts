const Articles = require('../models/article');
const mongoose = require('mongoose')

export class ArticlesController {
    getArticle(parametr: any) {
        return Articles.find({ _id: parametr._id})
      .then((article: any) => {
        return article[0];
      });
    }
    getArticles(args: any) {
        return Articles.find().sort({"createdAt": -1})
      .then((article: any) => {
        return article;
      });
    }

    createArticle(inputObject: any) {
        return Articles.create(inputObject.article).then((articleInfo: any) => {
          return articleInfo;
        });
      }
    
    deleteArticle(parametr: any) {
      return Articles.findOneAndDelete({ _id: parametr._id }).then(
        (article: any) => {
        return article[0];
      });
    }
}

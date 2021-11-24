const Articles = require('../models/article');

export class ArticlesController {
    getArticle(args: any) {
        return Articles.find({ url: args['url'] })
      .then((article: any) => {
        return article[0];
      });
    }
    getArticles(args: any) {
        return Articles.find({ url: args['url'] })
      .then((article: any) => {
        return article;
      });
    }

    createArticle(inputObject: any) {
        return Articles.create(inputObject.article).then((articleInfo: any) => {
          return articleInfo;
        });
      }
}

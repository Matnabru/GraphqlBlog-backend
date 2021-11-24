import { GraphQLResolveInfo } from 'graphql';
import { ArticlesController } from '../../controllers/article.controller';
const articlesController = new ArticlesController();
export const resolvers = {
    getArticles: (_: void, args: any, _info: GraphQLResolveInfo) => {
      return articlesController.getArticles(args);
    },
    getArticle: (_: void, args: any, _info: GraphQLResolveInfo) => {
        return articlesController.getArticle(args);
      },
    createArticle: (inputObject:any) => {
        return articlesController.createArticle(inputObject);
      },
};

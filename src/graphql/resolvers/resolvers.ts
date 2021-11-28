import { GraphQLResolveInfo } from 'graphql';
import { ArticlesController } from '../../controllers/article.controller';
const articlesController = new ArticlesController();
export const resolvers = {
    getArticles: (_: void, args: any, _info: GraphQLResolveInfo) => {
      return articlesController.getArticles(args);
    },
    getArticle: (parametr: any, args: any, _info: GraphQLResolveInfo) => {
        return articlesController.getArticle(parametr);
      },
      
    createArticle: (inputObject:any) => {
        return articlesController.createArticle(inputObject);
      },
    deleteArticle: (parametr:any) => {
        return articlesController.deleteArticle(parametr);
      },
    
};

import { buildSchema } from "graphql";
const schema = buildSchema(`type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }
  
  
  input ArticleInput {
    title: String!
    body: String!
  }
  
    type Query {
    getArticles:[Article!]
  }

  extend type Query {
    getArticle:Article!
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
  }

  schema {
    query: Query
    mutation: Mutation
  }
  `,)

  export { schema }
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`type Article {
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
    getArticle(_id: String!): Article
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
  }

  extend type Mutation {
    deleteArticle(_id: String!): Article
  }

  schema {
    query: Query
    mutation: Mutation
  }
  `);
exports.schema = schema;

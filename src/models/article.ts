import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ArticleInterface {
    title: string;
    body: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const ArticleSchema = new Schema<ArticleInterface>({
    title: { type: String, required: true },
    body: { type: String, required: true },
  },{ timestamps: true });

  module.exports = model('Article',ArticleSchema);
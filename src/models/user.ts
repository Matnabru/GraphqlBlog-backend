import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface User {
    name: string;
    email: string;
    avatar?: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
  });

  module.exports = model('User',UserSchema);
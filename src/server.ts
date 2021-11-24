import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import * as dotenv from 'dotenv';
import { Schema, model, connect } from 'mongoose';
dotenv.config()

// Construct a schema, using GraphQL schema language
var schemaQL = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

// rest of the code remains same

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schemaQL,
  rootValue: root,
  graphiql: true,
}));
app.listen(process.env.PORT);
console.log(`Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`);


// MONGODB


// 1. Create an interface representing a document in MongoDB.
interface User {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

// 3. Create a Model.
const UserModel = model<User>('User', schema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect(`mongodb+srv://matt123:matt321@cluster0.wclvz.mongodb.net/posts?retryWrites=true&w=majority`);


  const doc = new UserModel({
    name: 'Bill',
    email: 'bill@initech.com',
  });
  await doc.save();

  console.log(doc.email); // 'bill@initech.com'
}
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import * as dotenv from 'dotenv';
import { Schema, model, connect } from 'mongoose';
import { schema } from './graphql/schemas/schema'
import { resolvers } from "./graphql/resolvers/resolvers"
const mongoose = require('mongoose')
dotenv.config()


const path = require('path')
const PORT = process.env.PORT || 8000



const app = express()

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:resolvers,
    graphiql: true
}))

const uri = `mongodb+srv://matt123:matt321@cluster0.wclvz.mongodb.net/posts?retryWrites=true&w=majority`
const options = {useNewUrlParser: true, useUnifiedTopology: true}
// MONGODB
mongoose.connect(uri, options).then(
  app.listen(PORT,),
  console.log(`Listening on ${ PORT }`)
)
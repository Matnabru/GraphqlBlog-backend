import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import * as dotenv from 'dotenv';
import { Schema, model, connect } from 'mongoose';
import { schema } from './graphql/schemas/schema'
import { resolvers } from "./graphql/resolvers/resolvers"
const mongoose = require('mongoose')
dotenv.config()
var cors = require('cors');

const path = require('path')
const PORT = process.env.PORT || 8000

//console.log('Frontend side set to : ' + process.env.FRONTEND_LINK)

const app = express()
app.use(cors({credentials: true, origin: process.env.FRONTEND_LINK}));
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
  //console.log(`Listening on http://localhost:${ PORT }`)
)
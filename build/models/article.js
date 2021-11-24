"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const ArticleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
}, { timestamps: true });
module.exports = (0, mongoose_1.model)('Article', ArticleSchema);

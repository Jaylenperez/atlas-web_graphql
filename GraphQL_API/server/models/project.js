const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Project Schema
const projectSchema = new Schema({
  title: String,
  weight: Number,
  description: String,
});

// Create Project model
module.exports = mongoose.model('Project', projectSchema);

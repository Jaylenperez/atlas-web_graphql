const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Task Schema
const taskSchema = new Schema({
  title: String,
  weight: Number,
  description: String,
  projectId: String, // Relates task to a project
});

// Create Task model
module.exports = mongoose.model('Task', taskSchema);

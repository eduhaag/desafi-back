import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;


const gradeSchema = mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    default: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now()
  }
});

const GradeModel = mongoose.model('grade', gradeSchema, 'grades');

export { db, GradeModel };

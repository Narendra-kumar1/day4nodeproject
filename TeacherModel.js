const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    enum: ['CSE', 'ECE', 'EEE', 'ME', 'CE'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  subjectsTaught: [
    {
      courseCode: String,
      courseName: String
    }
  ],
  joiningDate: {
    type: Date,
    default: Date.now
  },
  isHOD: {
    type: Boolean,
    default: false
  }
});
const TeacherModel=mongoose.model("Teacher",teacherSchema)
module.exports = TeacherModel


const mongoose=require("mongoose")

const object={
    name: {
      type: String,
      required: true,
      trim: true
    },
    rollNumber: {
      type: String,
      required: true,
      unique: true
    },
    department: {
      type: String,
      enum: ['CSE', 'ECE', 'EEE', 'ME', 'CE'],
      required: true
    },
    year: {
      type: Number,
      min: 1,
      max: 4,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    courses: [
      {
        courseCode: String,
        courseName: String,
        grade: { type: String, enum: ['A', 'B', 'C', 'D', 'F', 'I'], default: 'I' }
      }
    ],
    attendance: [
      {
        date: { type: Date, required: true },
        status: { type: String, enum: ['Present', 'Absent'], required: true }
      }
    ],
    registeredAt: {
      type: Date,
      default: Date.now
    }
  }
const StudentSchema=new mongoose.Schema(object);

const StudentModel= mongoose.model("Student",StudentSchema)

module.exports =StudentModel
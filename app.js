

const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const mongoose=require("mongoose")
app.use(express.json());


///----- controllers

const CreateFactory=require("./utilities/createFactory.js");
const StudentModel = require("./StudentModel.js");
const getAllFactory=require("./utilities/getAllFactory.js")
const getOneFactory=require("./utilities/getOneFactory.js")
const deleteFactory=require("./utilities/deleteFactory.js")
//------  handleres -----
const createStudent= CreateFactory(StudentModel)

const getStudents= getAllFactory(StudentModel)
const getStudent=getOneFactory(StudentModel);
const deleteStudent=deleteFactory(StudentModel)
// ------ROUTES ------

app.post("/student",createStudent)
app.get("/students",getStudents)
app.get("/student/:id",getStudent)

app.delete("/student/:id",deleteStudent);
//----INITIAL CONNECTION-----

const initialConnection=async()=>{
    try{
        const URL=`mongodb+srv://Narendra:kumar@cluster0.agwbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
       await mongoose.connect(URL).then(()=>{
        console.log("database connection established")
       })
       
        const port=process.env.PORT || 3000;
        app.listen(port,()=>{
        console.log("server started")
        })
    }
    catch(err){
        console.log("There is connection error");
    }
}
initialConnection();
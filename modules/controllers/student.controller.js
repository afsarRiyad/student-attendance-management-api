import AppError from "../../utils/AppError.js";
import student from "../models/student.model.js";

const createStudentController = async (req, res, next) => {
   try {
    const { studentId, fullName, email, phone, batch, batchName, address, dateOfBirth } = req.body;
    const newStudent = new student({ studentId, fullName, email, phone, batch, batchName, address, dateOfBirth });
    const allStudents = (await student.find()).length;

    const baseId = 2019033871;
    newStudent.studentId = baseId + allStudents;

      const existingStudentWithSameEmail = await student.findOne({ email });
      const existingStudentWithSameNumber = await student.findOne({ phone });
    if (existingStudentWithSameEmail) {
        throw new AppError('Student with this email already exists', 400);
    }
    if (existingStudentWithSameNumber) {
        throw new AppError('Student with this phone number already exists', 400);
    }
    await newStudent.save();
    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: newStudent
    });
   } catch (error) {
    next(error);
}
}

const getAllStudentsController = async(req, res, next) => {
      try {
        const students = await student.find()
         res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            data: students
         })
      } catch (error) {
         next(error)
}
}

const updateStudentController = async(req, res, next)=>{
    try {
        const {id} = req.params
        const updateStudent = await student.findByIdAndUpdate(id, req.body, {new : true})
        if(!updateStudent){
           throw new AppError('student dont exists',400)
        }
        res.status(200).json({
            success: true,
            message: 'student info update successfully',
            data: updateStudent
        })
    } catch (error) {
        next(error)
}
}

const deleteStudentController = async(req, res, next)=>{
    try {
        const {id} = req.params
        const deleteStudent = await student.findByIdAndDelete(id)
        if(!deleteStudent){
            throw new AppError('student dont exists',400)
        }
        res.status(200).json({
            success: true,
            message: 'student deleted successfully',
            data: deleteStudent
        })
    } catch (error) {
        next(error)
}
}

export { createStudentController, updateStudentController, deleteStudentController, getAllStudentsController}
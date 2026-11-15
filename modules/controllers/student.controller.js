import student from "../models/student.model";

const createStudentController = async (req, res, next) => {
   try {
    const { studentId, fullName, email, phone, batch, batchName, address, dateOfBirth } = req.body;
    const newStudent = new student({ studentId, fullName, email, phone, batch, batchName, address, dateOfBirth });
    await newStudent.save();
    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: newStudent
    });
   } catch (error) {
    if (error.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "Student with this ID or email already exists"
        });
    }
    next(error);
   }
}

export { createStudentController}
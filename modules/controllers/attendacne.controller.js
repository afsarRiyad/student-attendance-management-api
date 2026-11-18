
import attendance from './../models/attendance.model.js';
import batch from './../models/batch.model.js';

const attendanceController = async (req, res, next) => {
    try {
        const {batchName, classNo, students, classDate} = req.body


        const existingBatch = await batch.findOne({batchName})
        if (!existingBatch) {
            return res.status(404).json({
                success: false,
                message: 'Batch not found'
            })
        }
        const newAttendance = await attendance.create({
            batchName,
            classNo,
            classDate,
            students
        })
        res.status(201).json({
           success: true,
           message: 'attendance submitted',
           data: newAttendance
        })
    } catch (error) {
        next(error)
    }
}

export {attendanceController}
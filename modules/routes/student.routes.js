import express from 'express'
import validate from '../../middleware/validate.js'
import { studentSchema, updateStudentSchema } from '../schemas/student.schema.js'
import { createStudentController, deleteStudentController, getAllStudentsController, updateStudentController } from '../controllers/student.controller.js'

const router = express.Router()

router.post('/create/student', validate(studentSchema), createStudentController)
router.patch('/update/student/:id', validate(updateStudentSchema), updateStudentController)
router.get('/get/students', getAllStudentsController)
router.delete('/delete/student/:id', deleteStudentController)

export default router
import express from 'express'
import validate from '../../middleware/validate.js'
import { attendanceSchema } from '../schemas/attendance.schema.js'
import { attendanceController } from '../controllers/attendacne.controller.js'

const router = express.Router()

router.post('/attendance', validate(attendanceSchema), attendanceController)

export default router
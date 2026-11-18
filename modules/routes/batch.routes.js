import express from 'express'
import { createBatchController, updateBatchController, deleteBatchController } from '../controllers/batch.controller.js'
import validate from '../../middleware/validate.js'
import {createBatchSchema, updateBatchSchema} from '../schemas/batch.scema.js'

const router = express.Router()

router.post('/create/batch', validate(createBatchSchema),  createBatchController)
router.post('/update/batch', validate(updateBatchSchema),  updateBatchController)
router.delete('/delete/:id',  deleteBatchController)

export default router
import {z} from 'zod';

 const batchSchema = z.object({
    batchName: z.union([z.string().min(2).max(20, "Batch name must not exceed 20 characters"),
               z.number().min(2).max(4, "Batch number must not exceed 4 characters")], 
                {
                    error: "Batch date must be a string or number"
                }),         
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
      totalClass: z.number().min(1)
 })

 const createBatchSchema = batchSchema.refine(
    (data)=> !data.endDate || data.startDate < data.endDate,
    {
        message: "End date must be after start date",
        path: ["endDate"]
    }
 )

 const updateBatchSchema = batchSchema.partial()

 export {createBatchSchema, updateBatchSchema}
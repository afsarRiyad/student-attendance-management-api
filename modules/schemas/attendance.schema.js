import { z } from "zod";

const attendanceSchema = z.object({
    
    classNo: z.number({
        error: "Class number is required"
    }),
    
     classDate: z.coerce.date({
        error: "Invalid class date"
    }),
    batchName: z.string({
        error: "Batch ID is required"
    }),
    
    students: z.array(z.object({
        studentId: z.number({
            error: "Student ID must be a number"
        }),

        homeWork: z.enum(["done", "not done"], {
            error: "Homework must be done or not done"
        }).default("not done"),
    
        attendanceStatus: z.enum(["present", "absent"], {
            error: "Attendance must be present or absent"
        }).default("absent")

    }))

});


const updateAttendanceSchema = attendanceSchema.partial();

export { attendanceSchema, updateAttendanceSchema };
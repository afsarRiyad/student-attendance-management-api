import {z} from 'zod';

const studentSchema = z.object({
    fullName: z.string()
              .min(2)
              .max(50, "Full name must not exceed 50 characters"),
    email: z.string()
            .email("Invalid email address"),
    phone: z.string(),

    address: z.object({
        district: z.string()
                  .min(2)
                  .max(50, "District name must not exceed 50 characters"),
        city: z.string()
              .min(2)
              .max(50, "City name must not exceed 50 characters"),
        postCode: z.number()
                   .min(1000, "Post code must be at least 4 digits")
                   .max(9999, "Post code must not exceed 4 digits"),
        street: z.string()
                .min(2)
                .max(100, "Street name must not exceed 100 characters"),
        houseNo: z.number().optional()
    }),
    dateOfBirth: z.coerce.date()
    })

    const updateStudentSchema = studentSchema.partial()

    export {studentSchema, updateStudentSchema}
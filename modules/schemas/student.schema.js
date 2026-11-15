import {z} from 'zod';

const studentSchema = z.object({
    fullName: z.string()
              .min(2)
              .max(50, "Full name must not exceed 50 characters"),
    email: z.string()
            .email("Invalid email address"),
    phone: z.number()
           .min(1000000000, "Phone number must be at least 10 digits")
            .max(9999999999, "Phone number must not exceed 10 digits"),
    batch: z.string()
          .min(2).max(20, "Batch name must not exceed 20 characters"),
    batchName: z.string().min(2).max(20, "Batch name must not exceed 20 characters"),
    address: z.object({
        district: z.string()
                  .min(2)
                  .max(50, "District name must not exceed 50 characters"),
        city: z.string()
              .min(2)
              .max(50, "City name must not exceed 50 characters"),
        postCode: z.number()
                   .min(100000, "Post code must be at least 6 digits")
                   .max(999999, "Post code must not exceed 6 digits"),
        street: z.string()
                .min(2)
                .partial()
                .max(100, "Street name must not exceed 100 characters"),
        houseNo: z.number().optional().partial()
    }),
    dateOfBirth: z.coerce.date()
    })

    export {studentSchema}
import mongoose from "mongoose";

const attendanceModel = new mongoose.Schema({
    batchName:{
        type: String,
        required: true
    },
    studentId:{
        type: Number,
        required: true,
        unique: true
    },
    studentName:{
        type: String,
        required: true,
        trim: true
    },
    classDate:{
        type: Date,
        required: true
    },
    homeWork:{
        type: String,
        enum : [true, false],
        default: false
    },
    attendance:{
        type: String,
        enum : [true, false],
        default: false
    },
})

const attendance = mongoose.model("attendance", attendanceModel)
export default attendance
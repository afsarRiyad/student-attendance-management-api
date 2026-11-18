import mongoose from "mongoose";

const attendanceModel = new mongoose.Schema({
    classNo: {
        type: Number,
        required: true,
        unique: true
    },
    batchName: {
        type: String,
        required: true
    },
    classDate: {
        type: Date,
        required: true
    },
    students: [{
        studentId: {
            type: Number,
            required: true
        },
        homeWork: {
            type: String,
            enum: ["done", "not done"],
            default: "not done"
        },
        attendanceStatus: {
            type: String,
            enum: ["present", "absent"],
            default: "absent"
        }
    }]

}, { timestamps: true });

const attendance = mongoose.model("attendance", attendanceModel);

export default attendance;
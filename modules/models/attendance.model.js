import mongoose from "mongoose";

const attendanceModel = new mongoose.Schema({
    classNo: {
        type: String,
        required: true
    },
    batch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true
    },
    students: [{
        studentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true
        },
        classDate: {
            type: Date,
            required: true
        },
        homeWork: {
            type: String,
            enum: ["done", "not done"],
            default: "not done"
        },
        attendance: {
            type: String,
            enum: ["present", "absent"],
            default: "absent"
        }
    }]

}, { timestamps: true });

const attendance = mongoose.model("attendance", attendanceModel);

export default attendance;
import mongoose from "mongoose";

const batchModel = new mongoose.Schema({
    batchName:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
    },
    totalClass:{
        type: Number,
        required: true
    }
}, {timeseries: true})

const batch = mongoose.model("batch", batchModel)

export default batch
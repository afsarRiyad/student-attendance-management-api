import mongoose from "mongoose";

const studentModel = new mongoose.Schema(
  {
    studentId: {
      type: Number,
      unique:true,
      required: true
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    phone: {
      type: Number,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    batchName:{
      type: String,
      required: true
    },
    address: {
      disctrict: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postCode: {
        type: Number,
        required: true,
      },
      street: {
        type: String,
      },
      houseNo: {
        type: Number,
      },
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
  },
  { timeseries: true },
);

const student = mongoose.model("student", studentModel);
export default student;
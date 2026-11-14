import mongoose from "mongoose";

const uri = process.env.MONGO_URL;
const timer = (ms) => {
   return new Promise((resolve)=>(setTimeout(resolve, ms)))
}

const connectDb = async () => {
  let retry = 3;
  for (let i = 0; i < retry; i++) {
    try {
       await mongoose.connect(uri);
      console.log("mongoDb connected successfully");
      return
    } catch (error) {
      console.log("error while connecting mongoDb", error.message);

      if(i === retry -1){
        console.log(`all ${retry} attempts finished`);
        process.exit(1);
      }
      timer(2000)
      console.log(`retrying after 2 sec, ${i} attempts `);
    }
  }
};

export default connectDb;

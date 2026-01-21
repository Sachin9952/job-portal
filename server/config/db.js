import mongoose from 'mongoose'

const connectDB = async () => {
    try {
       const res = await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
       console.log("Database connected successfully!!")
    } catch (error) {
        console.log(error)
    }

}



export default connectDB

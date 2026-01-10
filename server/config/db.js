import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log('Database Connected'));
        
        mongoose.connection.on('error', (err)=> console.log('Database Connection Error:', err));

        await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1);
    }
}


export default connectDB
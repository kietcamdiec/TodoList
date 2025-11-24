import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING
            
        );
        console.log("Connect database success");
    } catch (error) {
        console.log("Connection fail:", error);
        process.exit(1);
    }
}
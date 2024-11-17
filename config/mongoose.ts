import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '../config/config';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          } as ConnectOptions);
          console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1); 
    }
}

export default connectDB;
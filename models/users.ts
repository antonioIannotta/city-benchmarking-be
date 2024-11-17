import  mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    username: String,
    email: String,
    salary: Number,
    city: String,
    interests: Array<String>,
}

const userSchema: Schema = new Schema({
    'username': {type: String, required: true},
    'email': {type: String, required: true},
    'salary': {type: Number, required: true},
    'city': {type: String, required: true},
    'interests': {type: Array<String>, required: true}
}, {collection: 'users'});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
import  mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    username: String,
    email: String,
    grossSalary: Number,
    city: String,
    region: String | undefined,
    country: String | undefined,
    yoE: Number,
    yoEwithinTheCompany: Number,
    weekelyRemoteWorking: Boolean,
    weekelyRemoteWorkingInDays: Number | undefined,
    industry: String,
    jobTitle: String,
    ticketRestaurant: Boolean,
    ticketRestaurantAmount: Number | undefined,
    ticketRestaurantValue: Number | undefined
}

const userSchema: Schema = new Schema({
    'username': {type: String, required: true},
    'email': {type: String, required: true},
    'grossSalary': {type: Number, required: true},
    'city': {type: String, required: true},
    'region': {type: String, required: false},
    'country': {type: String, required: false},
    'yoE': {type: Number, required: true},
    'yoEwithinTheCompany': {type: Number, required: true},
    'weekelyRemoteWorking': {type: Boolean, required: true},
    'weekelyRemoteWorkingInDays': {type: Number, required: false},
    'industry': {type: String, required: true},
    'jobTitle': {type: String, required: true},
    'ticketRestaurant': {type: Boolean, required: true},
    'ticketRestaurantAmount': {type: Number, required: false},
    'ticketRestaurantValue': {type: Number, required: false}
}, {collection: 'users'});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: String,
    email: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
    }, 
    profileImg: {type: String},
    password: {
        type: String,
    }, role: {
        type: String,
        default: "user",
    },
    gender: String,
    address: String,
    phone: String
}, {
    timestamps: true,
});


const UserModal = mongoose.models.users || mongoose.model("users", userSchema);
export default UserModal;
 


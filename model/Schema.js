import {Schema, model, models} from "mongoose";


const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

const Users = models.parcel4u_users ||  model('parcel4u_users', userSchema)  //if user collection already exist then use it else create new one using model('user', userSchema)

export default Users
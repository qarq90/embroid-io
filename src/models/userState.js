import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
    firstName: String,
    secondName: String,
    email: String,
    phone: String,
    message: String,
})

let User;

try {
    User = mongoose.model('User')
}
catch (e) {
    User = mongoose.model('User', userSchema)
}

export default User
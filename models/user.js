import mongoose, {Schema} from 'mongoose';
import { createHmac } from 'crypto'

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    salt:{
        type: String
    },
    name: {
        type: String,
        required: true,
        maxLength: 30
    }
},{timestamps:true})

userSchema.methods = {
    authenticate(password){
        return this.password == this.encryptPassword(password) //ss pass mã hóa gửi lên với trong db
    },
    encryptPassword(password){
        if(!password) return
        try {
            return createHmac("sha256", "abc").update(password).digest('hex')
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function(next){// trc khi .save chạy middleware
    this.password = this.encryptPassword(this.password)
    next()
})
export default mongoose.model('User', userSchema)
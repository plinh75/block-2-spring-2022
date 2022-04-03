import mongoose, {Schema, ObjectId} from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String, 
        minLength:5, 
        required: true,
        unique: true, 
        index: true
    },
    price: {
        type: Number, 
        required: true
    },
    img:{
        type: String,
        required: true
    },
    category: {
        type: ObjectId, 
        ref: "Category"
    }
},{timestamps:true})
export default mongoose.model('Product', productSchema)
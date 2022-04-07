import mongoose, {Schema, ObjectId} from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,  
        required: true,
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
productSchema.index({'$**': 'text'});
export default mongoose.model('Product', productSchema)
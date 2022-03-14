import mongoose from "mongoose";

//khởi tạo model
const Product = mongoose.model('Product', {name:String})

//api list sp
export const list = async (req, res) => {
    try {
        res.json(products);
    } catch (error) {
        res.status(404).json({
            message: "không load đc ds"
        })
    }
}


export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
}

//api thêm sp
export const create = async (req, res) => {
    try {
        const product =  await new Product(req.body).save()
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message:"không thêm đc sp"
        })
    }
}

//api xóa
export const remove = async(req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body:item));
}
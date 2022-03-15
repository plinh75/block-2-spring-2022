import Product from '../models/product'

//api list sp
export const list = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products);
    } catch (error) {
        res.status(404).json({
            message: "không load đc sp"
        })
    }
}

//load 1 sp
export const read = async (req, res) => {
    try {
        const products = await Product.findOne({_id:req.params.id})
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message:"không load đc"
        })
    }
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
    try {
        const products = await Product.findOneAndDelete({_id:req.params.id})
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message:"không xóa đc"
        })
    }
}

//api update
export const update = async (req, res) => {
    try {
        const products = await Product.findOneAndUpdate({id:req.params.id}, req.body)
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message:"không sửa đc"
        })
    }
}
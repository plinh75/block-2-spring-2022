import mongoose from "mongoose";

//khởi tạo model
const New = mongoose.model('New', {title:String, desc:String})

//api list sp
export const list = async (req, res) => {
    try {
        const news = await New.find()
        res.json(news);
    } catch (error) {
        res.status(404).json({
            message: "không load đc ds"
        })
    }
}

//load 1 sp
export const read = async (req, res) => {
    try {
        const news = await New.findOne({_id:req.params.id}).exec()
        res.json(news)
    } catch (error) {
        res.status(400).json({
            message:"không load đc"
        })
    }
}

//api thêm sp
export const create = async (req, res) => {
    try {
        const news =  await new New(req.body).save()
        res.json(news);
    } catch (error) {
        res.status(400).json({
            message:"không thêm đc sp"
        })
    }
}

//api xóa
export const remove = async(req, res) => {
    try {
        const news = await New.findOneAndDelete({_id:req.params.id}).exec()
        res.json(news)
    } catch (error) {
        res.status(400).json({
            message:"không xóa đc"
        })
    }
}

//api update
export const update = async (req, res) => {
    try {
        const news = await New.findOneAndUpdate({id:req.params.id}, req.body).exec()
        res.json(news)
    } catch (error) {
        res.status(400).json({
            message:"không sửa đc"
        })
    }
}
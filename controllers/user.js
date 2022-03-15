import User from '../models/user'

//đki
export const signup = async (req, res) => {
    try {
        const user = await new User(req.body).save()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"không đki đc"
        })
    }
}

//đnhap
export const signin = async (req, res) => {
    try {
        const user = await User.findOne({_id:req.params.id})
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"không đnhap đc"
        })
    }
}
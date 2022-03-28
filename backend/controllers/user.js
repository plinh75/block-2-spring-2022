import User from '../models/user'
import jwt from 'jsonwebtoken'

//đki
export const signup = async (req, res) => {
    const {email, name, password} = req.body
    try {
        const existUser = await User.findOne({email}).exec()
        if(existUser) {
            res.json({
                message: 'email đã tồn tại'
            })
        }

        const user = await new User({email, name, password}).save()
        res.json({
            user: {
                role:user.role,
                name: user.name,
                email: user.email,
                _id: user._id
            }
        })
    } catch (error) {
        
    }
}

//đnhap
export const signin = async (req, res) => {
    const {email,password} = req.body
    try {
        const user = await User.findOne({email}).exec()
        if(!user) {
            res.status(400).json({
                message: 'email k tồn tại'
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: 'sai mật khẩu'
            })
        }

        const token = jwt.sign({_id: user._id}, "12345", {expiresIn:60*60})

        res.json({
            token,
            user: {
                role:user.role,
                name: user.name,
                email: user.email,
                _id: user._id
            }
        })
    } catch (error) {
        
    }
}
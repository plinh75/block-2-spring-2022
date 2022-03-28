import expressJWT from 'express-jwt';

export const checkAuth = (req, res, next) => {
    const status = true;
    if(status){
        console.log("b1")
        next();
    } else {
        console.log("false");
    }
}

export const requireSignin = expressJWT({
    algorithms: ["HS256"],
    secret: "12345",
    requestProperty: "auth"
})

export const isAuth = (req, res, next) => {
    console.log('req.profile',req.profile)
    console.log('req.auth',req.auth)
    
    const status = req.profile._id == req.auth._id
    if(!status){
        res.status(400).json({
            message: "khong co quyen truy cap"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    
}
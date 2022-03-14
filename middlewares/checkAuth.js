export const checkAuth = (req, res, next) => {
    const status = true;
    if(status){
        console.log("b1")
        next();
    } else {
        console.log("false");
    }
}
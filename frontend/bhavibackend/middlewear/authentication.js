const jwt = require("jsonwebtoken")

const authenticate = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        jwt.verify(token, 'masai', (err, decoded)=>{
            // bar
            if(decoded){
                req.body.user=decoded.userId
                next()
            }else{
                res.send("please login first")
            }
          });
    }
    else{
        res.send(" something is wrong please login first")
    }
}

module.exports={
    authenticate
}
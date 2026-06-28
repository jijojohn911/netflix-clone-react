// import jwt from 'jsonwebtoken'
// import user from '../model/user.js'

// const protect = async (req,res,next)=>{

//     let token;

//     if (res.headers.authorization && req.headers.authorization.startWith('Barrier')){
//         token = req.headers.authorization.split(" ")[1]
//     }
//     if(!token){
//         return res.status(400).json({message:"Not authorized"})
//     }
//     try {
//         const  decoded = jwt.verify(token,process.env.JWT_SECRET)

//         req.user=await user.findById(decoded.id).select('password')
//         return next()
//     } catch (error) {
//         return res.status(500).json({message:"token invalid or expired"})
        
//     }
// }
// export default protect

import connect from "@utils/database";
import User from '@models/schema'

connect()

export default async function handler(req,res){

    const {email,password}=req.body
    const user = await User.findOne({email,password})
    if(!user){
        return res.json({status:'Not able to find the user'})
    }
    else{
        res.redirect('/home')
    }
}
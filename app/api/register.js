import connect from "@utils/database";
import Customer from '@models/customer'

connect()

export default async function handler(req,res){
    try {
        const customer = await Customer.create(req.body);
        res.redirect('/')
        if(!customer){
            return res.json({"code":'User not created'})
        }
    } catch (error) {
        res.status(400).json({status:'Not able to create a new user.'})
    }
}
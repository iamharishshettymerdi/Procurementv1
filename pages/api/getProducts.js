import BuyerProduct from "../../Models/BuyerProduct"
import connectDb from "../../middleware/mongoose"
const handler=async(req,res)=>
{
    let products=await BuyerProduct.find()

    res.status(200).json({products})
}
export default connectDb(handler);
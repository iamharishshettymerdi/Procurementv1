import connectDb from "../../../middleware/mongoose"
import BuyerProduct from "../../../Models/BuyerProduct"


const handler=async(req,res)=>{

    if(req.method=="POST")
    {
        console.log("req.body ",req.body)
        let p=new BuyerProduct({
            productname:req.body.productname,
            productcode: req.body.productcode,
            Productquantity:req.body.productqty,
            Product_descrition:req.body.productdesc,
            Department:req.body.dept,
            Deliverywithin:req.body.deliverywithin,
            uom:req.body.uom,
            Paymentwithin:req.body.paymentwithin,
            Product_category:req.body.productcategory,
            Procurement_type:req.body.procurementtype,
        })
        await p.save()
        res.status(200).json({message:"added"})
    }
    else
    {
        res.status(400).json({error:"method not allowed"})
    }

}
export default connectDb(handler)
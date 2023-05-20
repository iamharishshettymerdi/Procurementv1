const mongoose= require("mongoose")
const BuyerProductScheema=new mongoose.Schema({
    productname:{type:String,required:true},
    productcode:{type:Number,required:true},
    Productquantity:{type:Number,required:true},
    Product_descrition:{type:String},
    Department:{type:String,required:true},
    uom:{type:String,required:true},
    Deliverywithin:{type:Date,required:true},
    Paymentwithin:{type:Date,required:true},
    Product_category:{type:String,required:true},
    Procurement_type:{type:String,required:true},
},{timestamps:true})

mongoose.models={}
export default mongoose.model("BuyerProductTable",BuyerProductScheema)

import foodModel from "../models/foodModel";
import fs from "fs"


const addFood=async (req,res)=>{
     const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category,
        
     })

}
 try {
    await food.save()
    res.json({success:true,message:"Food Added"})
    
 } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
 }







export {addFood};
const productModel = require('../model/productModel')
module.exports.getProduct =async(req,res)=>{
        const _data= await productModel.find({})
        if(_data){
    return res.send(({code:200,message:"success",data:_data}))
        }else{
            return res.send({code:500,message:'server err'})
        }
}
module.exports.addProduct =async(req,res)=>{
    console.log(req.body,11)

    const title = req.body.title
    const description=req.body.description
    const price=req.body.price
    const count=req.body.count
    const imageUrl=req.file.path

    if(!title || !description || !price ||!count||!imageUrl){
        return res.send({code:400,message:'bad request'})
    }
    const newProduct = new productModel({ title:title ,description:description, price:price,count:count,imageUrl:imageUrl })
    const success= await newProduct.save()

    if (success){
        return res.send(({code:200,message:" add success"}))
    }else{
        return res.send({code:500,message:'server err'})
    }

}
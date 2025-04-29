
const CreateFactory=(Model)=>{

    return( async function(req,res){
            try{
                const data=req.body;
                await Model.create(data);
                res.status(300).json({
                    status:"ok",
                    message:data
                })
            }
            catch(err){
                res.status(400).json({
                    status:"not ok",
                    message:"there is some eror"
                })
            }
        }
    )
  
}


module.exports=CreateFactory;
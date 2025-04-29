


function getAllFactory(Model){
    return (
       async function(req,res){
        try{
            const data=await Model.find();
            res.status(300).json(
                {
                    status:"ok got it",
                    message:data
                }
            )
        }
        catch(err){
            res.status(400).json({
                message:"No ddata found"
            })
        }
       }
    )

}

module.exports=getAllFactory;
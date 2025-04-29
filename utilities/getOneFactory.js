





function getOneFactory(Model){
    return (
       async function(req,res){
        try{
            const data=await Model.findById(req.params.id);
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

module.exports=getOneFactory;
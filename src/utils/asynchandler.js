const asynchandler=(requesthanlder)=>{
    (req,res,next)=>{
        promide.resolve(requesthanlder(req,res,next)).
        catch((err)=>next(err))
    }
}
export {asynchandler}
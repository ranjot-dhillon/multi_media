// this file is used to responce to User 
class apiresponse{
    constructor(statuscode,message="success",data){
        this.statuscode=statuscode,
        this.data=data
        this.message=message
        this.success=statuscode<400
    }
}
class apierror extends Error{
    constructor(
        statuscode,
        message="someting went wrong",
         statck="",
        errors=[],
    ){
        super(message);
        this.statuscode = statuscode;
        this.data=null,
        this.messsage=message,
        this.success=false,
        this.errors=errors
        }

}
import React from 'react'

const ApiReq = async (url='',object=null,errmsg=null) => {
    try{
        const response = await fetch(url,object);
        if(!response.ok)
        throw Error("Reload Required");
    }
    catch(err)
    {
        errmsg=err.Message;
    }
    finally
    {
        return errmsg;
    }
    
}
export default ApiReq;

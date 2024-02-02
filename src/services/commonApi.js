import axios from "axios"

 export const commonApi=async(method,url,body,headers)=>{
    const urlconf={
        method,
        url,
        data:body,
        headers:headers?headers:{'Content-Type':'application/json'}

    }
    return await axios(urlconf).then(res=>{
        return res
    }).catch(err=>{console.log(err);;return err})
 }
import { commonApi } from "./commonApi";
import { BASE_URL } from "./baseUrl";


export const registerApi = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/Register`,data,"")
}

export const loginApi = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,data,"")
}

export const addProjectApi = async(data,headers)=>{
    return await addProjectApi("POST",`${BASE_URL}/project/addproject` ,data,headers)
}
export const userProjects=async(header)=>{
    return await commonApi ("GET",`${BASE_URL}/user/projectlist`,"",header)
}
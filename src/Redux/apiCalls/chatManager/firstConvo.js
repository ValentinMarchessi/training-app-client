import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//DISABLE ANYTHING
export const firstConvo = async (senderId, receiverId) => {
    const res = await baseUrlDev.post(`conversation/`,{
        body: { senderId, receiverId }
    })
    return res.data
}
import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//DISABLE ANYTHING
export const findConvo = async (senderId, receiverId) => {
    const res = await baseUrlDev.get(`conversations/find/${senderId}/${receiverId}`)
    return res.data
}
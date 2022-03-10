import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//DISABLE ANYTHING
export const catchMessage = async (senderId) => {
    const res = await baseUrlDev.get(`messages/${senderId}`)
    return res.data
}
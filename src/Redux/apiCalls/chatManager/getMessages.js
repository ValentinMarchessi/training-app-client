import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//DISABLE ANYTHING
export const getMessages = async (conversationId) => {
    const res = await baseUrlDev.get(`messages/${conversationId}`)
    return res.data
}
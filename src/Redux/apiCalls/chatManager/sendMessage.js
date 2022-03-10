import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//DISABLE ANYTHING
export const sendMessage = async (conversationId, sender, text) => {
    const res = await baseUrlDev.post(`messages/`,{
        conversationId, sender, text
    })
    return res.data
}
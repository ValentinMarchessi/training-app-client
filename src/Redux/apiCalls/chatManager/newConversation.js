import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//DISABLE ANYTHING
export const newConversation = async (senderId, receiverId) => {
    await baseUrlDev.post(`conversations/`, {
        senderId, receiverId
    })
}
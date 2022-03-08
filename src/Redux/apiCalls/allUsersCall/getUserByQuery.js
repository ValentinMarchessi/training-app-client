import { baseUrlDev } from "../../../config/requestMethod/publicRequest";

//DISABLE ANYTHING
export const getUserByQuery = async (query) => {
    const res = await baseUrlDev.get(`user/find/${query}`)
    return res.data
}
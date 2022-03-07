import { baseUrlDev } from "../../../config/requestMethod/publicRequest";
import {
  getRoutinesDetailsStart,
  getRoutinesDetailsSuccess,
  getRoutinesDetailsFailure,
} from "../../reducers/routinesReducer.js";

//get routines By Id
//igual a la ruta de rutinas por ID pero se trae el modelo de ejercicios tambien asociado a las rutinas.

export const getRoutinesDetails = async (dispatch, id) => {
  dispatch(getRoutinesDetailsStart());
  try {
    const res = await baseUrlDev.get(`routine/details/${id}`);
    dispatch(getRoutinesDetailsSuccess(res.data));
  } catch (err) {
    dispatch(getRoutinesDetailsFailure());
  }
};

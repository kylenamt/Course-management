import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { TStudent } from "../types/student";

async function getStudentData():Promise<TStudent[]>{
  const blank: TStudent[] = [];
    try{
      const response = await axios.get("http://localhost:4000/students")
      return response.data;
      
    } catch(error){
      console.log(error);
      return blank;
    }
}

export {getStudentData}
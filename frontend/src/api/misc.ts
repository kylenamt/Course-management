import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const getStudentData = ()=> {
    axios.get("/students")
    .then(function(res){
        console.log(res);
    })
    .catch(function(error){
        console.log("STFU");
    })
    .finally(function(){
        console.log("done");
    })
}

export {getStudentData}
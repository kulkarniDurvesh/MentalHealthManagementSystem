import axios from "axios";

class Service implements IService {
    async Post(url:string,obj?: any,config?:any) {
        await axios.post(url,obj,config);
    }

    
}
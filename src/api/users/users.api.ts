import { AxiosInstace } from '../../service/axios/axios.service';
import { token } from '../../helper/token-user.helper';
import {routes} from '../../helper/routes.helper';
import { ICreateUser } from './interfaces/create-user.interfaces';

class UserApiService extends AxiosInstace {
    
   constructor(){ super(token) }

   public async create(user:ICreateUser){
    const resp = await this.post(`${routes.user.create}`, user)
    return resp
   }

   public async findUser(user:string){
    const resp = await this.get(`${routes.user.find}${user}`);
    return resp;
   }
}


export const UserApi = new UserApiService();
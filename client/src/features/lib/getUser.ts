import { AxiosResponse } from 'axios';
import api from 'app/api/index';
import { User } from './models/userModel';

export const getUser = async (email: string, number: string): Promise<AxiosResponse<Array<User>>> => {
    return api.post<Array<User>>('/getUser', {email, number});
}

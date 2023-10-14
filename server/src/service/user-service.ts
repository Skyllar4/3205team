import fs from 'fs';
import { resolve } from 'path';

interface User {
    email: string,
    number: string
}

export const getUser = async (userModel: User) => {
    
    const data: string = fs.readFileSync(resolve('') + `/src/db.json`, 'utf-8');

    return JSON.parse(data).filter((item: User) => userModel.number ? item.email === userModel.email && userModel.number === item.number : item.email === userModel.email);
    // Может тут хотелось видеть какой-нибудь алгоритм, но в данном кейсе filter норм
}

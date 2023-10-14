import { Response, Request } from "express";
import * as userService from '../service/user-service.js';

export const getUser = async (req: Request, res: Response) => {
    try {
        
        const userModel = {
            email: req.body.email.trim(),
            number: req.body.number.replace(/[\-s]/g, '')
        }
        /* 
            Формируем нужный объект для поиска, убираем пробелы у email и '-' у цифр
        */

        const userData = await userService.getUser(userModel);

        setTimeout(() => res.json(userData).status(200), 5000);

    } catch (err) {
        console.log(err);
        res.status(404);
    }
}

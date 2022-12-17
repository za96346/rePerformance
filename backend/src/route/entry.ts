import { Express } from "express";
import entryService from "../service/entry";

const entryRoute = (app: Express): void => {
    app.get('/entry/login', entryService.login)
    app.get('/entry/register', entryService.register)
}
export default entryRoute
import { Request, Response, } from 'express'


export {entryServiceProps, reqProps, resProps}
type reqProps = Request<{}, any, any, any, Record<string, any>>
type resProps = Response<any, Record<string, any>>
declare namespace entryServiceProps {
    interface indexPorps {
        login(req: reqProps, res: resProps): void;
        register(req: reqProps, res: resProps): void
    }
}
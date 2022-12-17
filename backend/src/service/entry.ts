import { entryServiceProps, reqProps, resProps } from "./types"

class entryService implements entryServiceProps.indexPorps {
    public login(req: reqProps, res: resProps): void {
        console.log(req.ip)
        res.json({hi: "comp"})
    }

    public register(req: reqProps, res: resProps): any {

    }
}
export default new entryService()

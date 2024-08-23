import * as express from "express"
import { Request, Response } from "express"
import ds from './config/dataSource';
import { User } from "./db/entities/user.entity";

const app = express()
app.use(express.json())

ds.initialize().then(x => {
    console.log('ok');
});




app.get("/users", async (req: Request, res: Response) => {
    const repo = ds.getRepository(User);


    const data = await repo.find();
    res.send(data);
})

app.get("/users/:id", async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const repo = ds.getRepository(User);


    const data = await repo.findOneBy({ id });
    res.send(data);
})

app.get('/custom', async (req: Request, res: Response) => {
    const data = await ds.manager.query('select * from countries');
    console.log(data);
    res.send(data);
})

app.get("/users/:id/country", async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const repo = ds.getRepository(User);


    const user = await repo.findOneBy({ id });
    const data = await user.country;
    res.send(user);
})

app.post("/users", async (req: Request, res: Response) => {
    const data = req.body;
    const repo=ds.getRepository(User);
    const user = await repo.create(data);
await repo.save(user);
    res.send('ok');
})

app.put("/users/:id", function (req: Request, res: Response) {

})

app.delete("/users/:id",  async(req: Request, res: Response)=> {
    const data = req.body;
    const repo=ds.getRepository(User);

    const r = await repo.delete(req.params.id);

    res.send(r);
})


app.listen(3001)
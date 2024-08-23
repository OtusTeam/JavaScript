import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/theme',(_,res)=>{
    res.send({background:'cyan', front:'red'})
})
app.listen(3001, () => { });
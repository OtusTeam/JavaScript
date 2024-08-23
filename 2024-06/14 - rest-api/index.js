import express from 'express';
import { router as booksRouter } from './routes/books-routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import basicAuth from 'express-basic-auth';
import fs from 'fs';
import xmlparser from 'express-xml-bodyparser';
import { render } from 'pug';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


const secert4Jwt = 'ldjklkadjfadklfjsd;kl';

const app = express();

const users = [
    { login: 'user1', pwd: 'password@@@', role: 'regular' },
    { login: 'admin', pwd: 'admin', role: 'admin' },
];


// app.use(basicAuth({
//     users: { 'user1': 'password@@@' }
// }))


// app.use((req, res, next) => {

//     console.log('inside 1st middleware',req.url, req.body);
//     res.on('finish', () => {
//         console.log('middleware 1 finish');
//     })
//     next();

// });


// app.use((req, res, next) => {

//     console.log('inside 2st middleware',req.url, req.body);
//     res.on('finish', () => {
//         console.log('middleware 2 finish');
//     })
//     next();

// });
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(req.cookies);
    res.cookie('FancyCookie', 1234);
    if (req.url === '/login') {
        next();
    } else {
        const auth = req.headers.authorization;
        if (!auth) {
            res.set('WWW-Authenticate', 'Basic realm="401"')
            res.status(401).send('Authentication JWT or Basic required');
            return;
        }
        const [type, token] = auth.split(' ');

        if (type === 'Basic') {
            const [login, pwd] = atob(token).split(':');


            if (!users.some(x => x.login === login && x.pwd === pwd)) {
                res.status(401).send('Wrong login/password');
                return;
            }
            next();
        }else if (type==='Bearer'){
            jwt.verify(token, secert4Jwt);
            next();
        }
        res.status(401).send(`Authentication '${type}' is not supported`);
        return;
    }
});




// app.set('view engine', 'pug');

//app.use(xmlparser());
app.use('/v1/api/books', booksRouter);


app.post('/login', (req, res) => {
    const {login, pwd} = req.body;

    console.log(login,pwd);

    if (!users.some(x => x.login === login && x.pwd === pwd)) {
        res.status(401).send('Wrong login/password');
        return;
    }

    const u = users.filter(x => x.login === login && x.pwd === pwd)[0];
    const token = jwt.sign({ user: u.login, role: u.role }, secert4Jwt, { expiresIn: '30m' });
     res.status(200).send(token);
});

app.listen(3001, () => { });
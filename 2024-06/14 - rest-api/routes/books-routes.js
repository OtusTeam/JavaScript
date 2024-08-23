import express from 'express';
export const router = express.Router();



const books = [
    { id: 1, name: 'Война и мир', isbn: 1111, author: { fullName: 'Лев Толстой' } },
    { id: 2, name: 'Евгений онегин', isbn: 2222, author: { fullName: 'Александр Пушкин' } },
    { id: 3, name: 'Отцы и дети', isbn: 3333, author: { fullName: 'Иван Тургенв' } },
]

let id = 4;


router.get('/', (req, res) => {
    const filter = req.query.filter;
    console.log('Inside log');
    let filtered = books;
    if (filter) {
        filtered = filtered.filter(x => x.name.includes(filter));
    }

    res.status(200).send(filtered);
})

router.get('/', (req, res) => {

    const filter = req.query.filter;

    let filtered = books;
    if (filter) {
        filtered = filtered.filter(x => x.name.includes(filter));
    }

    console.log('Inside log222');
    res.status(200).send(filtered);
})



router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.filter(x => x.id === id);
    console.log(book);
    if (!book.length) {
        res.status(404).send({ message: `Книга с id = ${id} не найдена` });
    } else {
        res.status(200).send(book[0]);
    }

})

router.get('/:id/author', (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.filter(x => x.id === id);
    console.log(book);
    if (!book.length) {
        res.status(404).send({ message: `Книга с id = ${id} не найдена` });
    } else {
        res.status(200).send(book[0].author);
    }

})


router.post('/', (req, res) => {
    const body = req.body;

    if (!body) {
        res.status(400).send({ message: 'Не указано тело запроса' });
        return;
    }

    if (!body.name || !body.isbn || !body.author) {
        res.status(400).send({ message: 'Некорректное тело запроса' });
        return;
    }

    const toInsert = { ...body, id: id++, };
    books.push(toInsert);

    res.status(201).send({ id: id - 1 });

});

router.post('/:id/send-to-paris', (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.filter(x => x.id === id);
    console.log(book);
    if (!book.length) {
        res.status(404).send({ message: `Книга с id = ${id} не найдена` });
    } else {
        res.status(200).send(`Книга ${book[0].name} была отправлена в Париж`);
    }

});





router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    const book = books.filter(x => x.id === id);
    console.log(book);
    if (!book.length) {
        res.status(404).send({ message: `Книга с id = ${id} не найдена` });
    } else {
        const toModify = book[0];
        toModify.name = body.name;

        toModify.isbn = body.isbn;

        toModify.author = body.author;

        res.status(200).send('ok');
    }

})


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.filter(x => x.id === id);
    console.log(book);
    if (!book.length) {
        res.status(404).send({ message: `Книга с id = ${id} не найдена` });
    } else {
        const index = books.indexOf(book[0]);
        books.splice(index, 1);

        res.status(204).send('deleted');
    }

})
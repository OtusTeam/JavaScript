create database otus_fancy;

-- СОздаем пустую таблицу
CREATE TABLE countries
(
    id integer NOT NULL PRIMARY KEY,
    name character varying(1024)
);


-- Вставляем в нее несколько стран
insert into countries (id, name)
values(1, 'Russia' ), (2, 'USA'), (3, 'France');


insert into countries(id, name)
 values (4, 'Germany');


-- простой селект
select
name as "Название страны",
id as "Идентификатор" 
from countries;




select * from countries;

-- вторая таблица
CREATE TABLE countries2
(
    id integer NOT NULL PRIMARY KEY,
    name character varying(1024)
);

insert into countries2(id, name)
select id, name || ' но другое' from countries;


select * From countries2;


-- создаем счетчик для ID
CREATE  SEQUENCE countries_id_seq
    START 1
    INCREMENT 1;


CREATE TABLE public.countriesWithCounter
(
    id integer NOT NULL DEFAULT nextval('countries_id_seq'::regclass),
    name character varying(1024) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT countriesWithCounter_pkey PRIMARY KEY (id)
)


insert into countriesWithCounter (name) 
select name from countries;



select * From countriesWithCounter;




select * From countriesWithUUid;


CREATE  SEQUENCE users_id_seq
    START 1
    INCREMENT 1;


-- Еще одна таблица
CREATE TABLE public.users
(
    id integer NOT NULL PRIMARY KEY DEFAULT nextval('users_id_seq'::regclass),
    username character varying(1024)  NOT NULL,
    email character varying(1024)  NOT NULL,
    age integer NOT NULL,
    country_id integer,

    CONSTRAINT fk_country_user FOREIGN KEY (country_id) REFERENCES public.countries (id) 
)

select * from countries

insert into users(username, email, age, country_id)
values('afet', 'afet@yandex.ru', 40, 1),
('apushkin', 'apushkin@mail.ru', 35, 1),
('mtwain', 'mtwain@gmail.com', 70, 2),
('aduma', 'aduma@gmail.fr', 70, 3);


insert into users(username, email, age, country_id)
values('gogol', 'gogol@mail.ru', 40, 1),
 ('bunin', 'bunin@gmail.com', 54, 1);



-- Используем WHERE
select * From users
where age > 40 or country_id = 1;


select * From users
where email like '%mail.ru'



insert into users(username, email, age, country_id)
values
('aduma', 'aduma@gmail.fr', 34, 3);


-- и ORDER BY
select * From users
where age > 30
order by email desc, age ;


update users set age = age + 1;

update users set email = username || '@yahoo.com', age = age +2;


update users
set email = username || '@yandex.ru'
where country_id = 1
;


select * from countries;


-- Удаление с условием
delete from  countries where id=4;


drop table countries2;




CREATE SEQUENCE comments_id_seq
    START 1
    INCREMENT 1;


CREATE TABLE public.comments
(
    id integer NOT NULL DEFAULT nextval('comments_id_seq'::regclass),
    user_id integer NOT NULL,
    text text COLLATE pg_catalog."default",
    date timestamp with time zone,
    CONSTRAINT comments_pkey PRIMARY KEY (id),
    CONSTRAINT "FK_user_comment" FOREIGN KEY (user_id)
        REFERENCES public.users (id)
);



insert into comments(user_id, text, date)
values (4, 'something in french', '2020-04-03T14:30'),
( 2,'мой дядя самых честных правил', '2019-03-03T14:30'),
( 2,'когда не в шутку занемог', '2019-12-10T14:30'),
( 1,'Еще сообщения', '2019-12-11T14:30');

select  * from comments;



-- джоин
select u.username, u.id, c.user_id,  c.text
from users as u
 join comments as c on u.id = c.user_id;


select u.username, u.id, c.user_id,  c.text
from users as u
left join comments as c on u.id = c.user_id;



select u.username, u.id, c.user_id,  c.text
from comments as c
right join users as u on u.id = c.user_id;








insert into countries(id, name)
values(101, 'England'), (121, 'Finland'), (501, 'New zeland'), (551, 'Spain')
select count(*) from countries

select distinct name
From countries 
where name like '%land'
order by name desc



delete from countries
where name like '%land' or name  = 'Spain'



select max(age ) from users
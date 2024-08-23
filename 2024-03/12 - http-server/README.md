# nodejs-http

<!-- https://github.com/nlapshin/nodejs-http

1. Какие знаете фреймворки?
express koa nest fastify - REST API. net и http.
apollo - для GraphQL -->


// Мы заходим в браузер и вбиваем google.ru и жмем Enter.
// Модель OSI
// Преобразование пакетов
// DNS сервера, маппинг домена и IP.
// google.ru - это доменное имя, которому соответствуем какая-то запить IP
// Протоколы взаимодействия на транспортном уровне TCP/UDP
// Это HTTP(S) протокол со своими версиями.

// localhost или 127.0.0.1 что это такое?
// localhost:8080. Есть разные службы.
// HTTP - это какой порт 80
// HTTPS - 443
// Telnet - 21
// SSH - 22
// Mongodb - 27017
// Postgres - 5432
// Mysql - 3306
// Clickhouse - несколько 8123(CLI), 9000

// IP адреса: IPv4(скоро закончится), IPv6.
// xxx.xxx.xxx.xxx -> 0.0.0.0 до 255.255.255.255
// IPv4 резерв. Локальные адреса 192.168.2.6 или 10.0.0.0, 224.
// Публичный адрес 8.8.8.8
// fe80::b89f:482f:4ae6:a8a3


// HTTP протокол. Есть разные версии. v1.1, HTTP/2, HTTP/3

// Формат запроса и формат ответа

// Формат запроса
// Title запроса. Версию протокола, метод запроса(POST/GET/DELETE/PUT/PATCH/OPTIONS/TRACE), путь до ресурса(/users/1)
// Headers - мета информация о запросе.
// Body - полезная нагрузка.

GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr

// Формату ответа
// Title ответа. Статус
// 2xx - всё ок
// 3xx - редирект
// 4xx - ошибка клиента(404 Not Found) 400 - Bad Request
// 5xx - ошибка сервера 500 - Internal server error

HTTPS - защищенный HTTP. public/private keys. Диффи Хэлмена для обмена ключей.

// http(или https)
// tcp(tls) 

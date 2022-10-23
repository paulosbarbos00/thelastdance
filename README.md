# Express Project

## Heroku
https://expressproject01.herokuapp.com/

## MongoDB
https://cloud.mongodb.com

## Testes com cURL 

### GET /books
```bash
curl 'https://expressproject01.herokuapp.com/books'
```

### GET /books/:id
```bash
curl 'https://expressproject01.herokuapp.com/books/1'
```

### POST /books
```bash
curl -X POST -d '{ id: 5, titulo: 'Título', autor: 'Autor', isbn: 00000, ano_lancamento: 2001 }' 'https://expressproject01.herokuapp.com/books'
```

### PUT /books/:id
```bash
curl -X PUT -d '{ titulo: 'Título', autor: 'Autor', isbn: 00000, ano_lancamento: 2001 }' 'https://expressproject01.herokuapp.com/books/1'
```

### DELETE /books/:id
```bash
curl -X DELETE 'https://expressproject01.herokuapp.com/books/1'
```

# Гайд по API
## И как он взаимодействие с бэком

>### Суть в том что бэк и фронт связывают API (**Application Programm Interface**)
> Это может запрос через [fetch]('https://learn.javascript.ru/fetch') либо [axios]('https://www.npmjs.com/package/axios')
>* **Запросы через API ВСЕГДА асинхронные**

## Скачивание

При клонировании склонируется сама папка куда будет помещён проект, создавать ничего **НЕ НУЖНО**

1. Открываем терминал и пишем `git clone https://github.com/themm-s/api-guide.git`
2. Далее открываем появившуюся папку
3. Открываем терминал и пишем `cd ./server/`
4. Пишем `npm i` и после установки зависимостей - `node server.js`

## Точка старта

Файл лежащий по пути `server/server.js`

*После прочтения комментариев ознакомься с клиентской частью, везде проставленны комментарии*

## Методы

Существуют [HTTP методы]('https://ru.hexlet.io/blog/posts/metody-http-get-post-put-i-drugie')

***

### GET

Используется в основном для получения данных

Пометка: **Не должен иметь body по старндартам**

***

### POST

Используется чтобы отправить данные в JSON формате 

**Явно указываем метод POST большими буквами, и body**

```
async function postData() {
  await fetch('http://localhost:3000/checkApi/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Vasya',
      age: 18
    })
  })
    .then(res => res.json()) // Преобразуем в json
    .then(data => console.log(data)); // Получаем данные в ответ
}
```

***

> [!NOTE]
> Ответы на вопрос

### А нах*я 2 then?

Поскольку запрос выполняется **Ассинхронно (Параллельно)** в случае если мы поставим 1 then то мы увидим в консоли промис а именно его статус и тд, можешь сделать вот так

```
async function postData() {
  await fetch('http://localhost:3000/checkApi/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Vasya',
      age: 18
    })
  })
    .then(res => console.log(res)) // и смотрим в консоль
}
```

### **1. Сначала запрос переводим в json**
### **2. Получаем сами данные**
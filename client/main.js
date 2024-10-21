/*

По умолчанию любой fetch имеет метод GET
Все взаимодействия с API должны быть ассинхронными

GET запрос ниже
*/
export async function getData() {
  await fetch('http://localhost:3000/getRequest/', { // Запрос
    headers: {
      'Content-Type': 'application/json' //ОБЯЗАТЕЛЬНО УКАЗЫВАЕМ КОНТЕНТ КОТОРЫЙ МЫ ОЖИДАЕМ ПРИНЯТЬ,
    }
  })
    .then(res => res.json()) // Преобразуем в json
    .then(data => console.log(data)); // Получаем данные в ответ на запрос
}

// Это метод POST сразу говорю что ответом на этот запрос будет то что ты будешь отправлять ему
export async function postData() {
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
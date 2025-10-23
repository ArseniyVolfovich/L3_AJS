fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const simplified = users.map(u => ({
      id: u.id,
      name: u.name,
      username: u.username,
      email: u.email,
      phone: u.phone
    }));
    console.log('Пользователи с нужными полями:');
    console.log(simplified);
  })
  .catch(err => console.error('Ошибка', err));

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {
    const incomplete = todos.filter(t => !t.completed);
    console.log('Незавершённые задачи');
    console.log(incomplete);
  })
  .catch(err => console.error('Ошибка', err));

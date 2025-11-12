async function processData() {
  try {
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsRes.json();
    const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
    console.log('Отсортированные данные по title: ');
    console.log(sortedPosts);

    const commentsRes = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await commentsRes.json();
    const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Сортировка по имени: ');
    console.log(sortedComments);

    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersRes.json();
    const simplifiedUsers = users.map(u => ({
      id: u.id,
      name: u.name,
      username: u.username,
      email: u.email,
      phone: u.phone
    }));
    console.log('Нужные поля: ');
    console.log(simplifiedUsers);

    const todosRes = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await todosRes.json();
    const incomplete = todos.filter(t => !t.completed);
    console.log('Тока незавершенные :');
    console.log(incomplete);
  } catch (error) {
    console.error('Ошибка', error);
  }
}

processData();

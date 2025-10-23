function getPosts(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => b.title.length - a.title.length);
      callback(sorted);
    })
    .catch(err => console.error('Ошибка', err));
}

getPosts(sortedPosts => {
  console.log('Отсортированные данные по полям title');
  console.log(sortedPosts);
});

function getComments(callback) {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      callback(sorted);
    })
    .catch(err => console.error('Ошибка', err));
}

getComments(sortedComments => {
  console.log('Результат сортировки по имени: ');
  console.log(sortedComments);
});

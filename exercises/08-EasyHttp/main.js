const request = new EasyHTTP();
const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');

getBtn.addEventListener('click', function() {
  request.get('https://jsonplaceholder.typicode.com/posts/1', function(
    err,
    data,
  ) {
    if (err) {
      return;
    }

    const p = document.querySelector('p');

    const response = JSON.parse(data);
    console.log(response);
    p.textContent = response.body;
  });
});

postBtn.addEventListener('click', function() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  request.post(
    'https://jsonplaceholder.typicode.com/posts',
    JSON.stringify(data),
    function(err, response) {
      if (err) {
        throw new Error(err);
      }

      const id = JSON.parse(response).id;
      console.log(JSON.parse(response).id);

      request.get(`https://jsonplaceholder.typicode.com/posts/${id}`, function(
        err,
        data,
      ) {
        if (err) {
          return;
        }

        const p = document.querySelector('p');

        const response = JSON.parse(data);
        console.log(response);
        p.textContent = response.body;
      });
    },
  );
});

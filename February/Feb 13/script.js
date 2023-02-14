var p1=Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts'),
  fetch('https://jsonplaceholder.typicode.com/users'),
  fetch('https://jsonplaceholder.typicode.com/comments'),
])
  p1.then(function (responses) {
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });


  // Task 2:-

// var a=fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("error: " + err));
const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {
  console.log(xhr.response);
});

xhr.open('GET','https://supersimplebackend.dev');
//xhr.open('GET','https://supersimplebackend.dev/Hello');
//xhr.open('GET','https://supersimplebackend.dev/products/first');
//xhr.open('GET','https://supersimplebackend.dev/products/not-supported');

xhr.send();
 
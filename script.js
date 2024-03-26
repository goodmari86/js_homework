const str = "qwe aqwert bcdadeklmno";
const re = /[b-zB-Z0-9_]{6,}/;
console.log(str.match(re))

var arr = [
  {
    userName:"Test",
    lastName:"Test",
    email:"test.test@gmail.com"
  },
  {
    userName:"Dmitro",
    lastName:"Porohov",
    email:"dmitro.porohov@yahoo.com"
  },
  {
    userName:"Andrii",
    lastName:"",
    email:"andrii@mail.ru" // Нам такі не підходять
  },
  {
    userName:"Dmitro",
    lastName:"Porohov",
    email:"dmitro.ivanovich.porohov@yahoo.com"
  },
  {
    userName:"Dmitro",
    lastName:"Porohov",
    email:"ivan@yahoo.com"
  },
];

const validEmailList = [];
const emailFormat = /^([\w]+)(.?)([\w]+)@(gmail|yahoo).com$/;
arr.forEach((data)=>{
  if(emailFormat.test(data.email)) {
    validEmailList.push(data.email);
  }
})
console.log(validEmailList);

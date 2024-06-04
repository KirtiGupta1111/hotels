// // console.log("sever file is running..");

//const { json } = require("express");

// // function add(a,b)
// // {
// //   return a+b;
// // }

// // let result = add(2,3);
// // console.log(result);


// // function callBack()
// // {

// //   console.log("I am Calling a Callback Function");
// // }

// // const add = function(a, b, callBack){
// //   const result = a+b;
// //   console.log(result);
// //   callBack();
// // }

// // add(3,4,callBack);
// // 



// const { log } = require("console");
// let fs = require("fs");
// let os = require("os");

// let user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile(" greeting.txt ",  "  Hi  "  +  user.username  +  '!\n',  () => {
//   console.log("file is created");
// });
// console.log(os);

// const notes = require("./notes.js");
// const _ = require("lodash");
// console.log("Sever file available");

// const age = notes.age;
// console.log(age);

// let data = ["person", "person", 1,2,1,2, "name", "age", "2"];
// let filter = _.uniq(data);

// console.log(filter);

// console.log(_.isString());



// const jsonString = '{"name": "kirti", "age" : 23, "city": "gurgaon"}';
// const jsonToObject = JSON.parse(jsonString);
// console.log(jsonToObject.age);
// console.log(jsonToObject.name);


// const objToConvert = {
//   name : "Alice",
//   age : 24,
// };

// const json = JSON.stringify(objToConvert);
// console.log(json);
// // console.log(typeof json);


const express =  require("express");
const app =  express();
const db = require("./db");


const bodyParser = require('body-parser');
app.use(bodyParser.json());

 app.get("/", (req, res) =>{
  res.send("Hello World");
 }) 

const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');
app.use('/person', personRoutes);
app.use('/menu', MenuItemRoutes);


const port = 8001;

app.listen(port , ()=>{
  console.log(`listening on port ${port}`);
});
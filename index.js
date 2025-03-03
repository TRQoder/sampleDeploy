const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 
app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>');
}); 
app.get('/logout', (req, res) => {
  res.send('<h1>Logout page</h1>');
}); 
app.get('/data', (req, res) => {
  res.json(
    { message: 'Hello World!',
        user:"tariq",
        age:20,
        email:"trq@gmail.com"
     });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
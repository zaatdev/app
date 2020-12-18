const express = require('express')
const app = express()
const port = 3000

const greetings = ['يا هلا', 'صباح الخير', 'مساء الخير','مساء النور ','السلام عليكم','مرحباً']

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/random",(req, res) => {
    const random_index = Math.floor(Math.random()*greetings.length); 
    res.send(greetings[random_index]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
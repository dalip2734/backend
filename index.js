const express = require('express');
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',()=>{
   res.send('i_dalipYadav')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please share and subscribe my channel.</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Dalip kumar</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

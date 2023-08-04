const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const db = require('./app/model')
db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log(`Database Connected!`);
    }).catch((err) => {
      console.log(`Cannot connect to database`, err);
      process.exit();
    })


app.get('/', (req, res) => {
  res.json({
    message: "Hello World 👋"
  })
})


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
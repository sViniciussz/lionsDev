import express from 'express'

const app = express();
const port = 3030;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send("primeira rota")
})

app.get('/teste', (req, res) =>{
  res.send('segunda rota')
})

app.listen(port, () =>{
  console.log(`Servidor rodando na porta ${port}`);
})
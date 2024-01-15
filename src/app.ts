import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('ola mundo')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
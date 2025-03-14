import express from 'express'
import cors from 'cors'
import { iaController } from './controllers/iaControllers.js'
import { messageController } from './controllers/messageController.js'
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.post('/ia', iaController)

app.get('/messages', messageController)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})
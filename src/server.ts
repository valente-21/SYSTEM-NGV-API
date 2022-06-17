
import app from "./app/app"
import 'dotenv/config'
const PORT = process.env.PORT || 3333

app.listen(PORT, ()=> console.log('servidor rodando na porta ====> ' + PORT))
import express from 'express'
import root_route from './routes/root.route.js'
import linear_route from './routes/linear.route.js'
import inter_route from './routes/inter.route.js'
import regress_route from './routes/regress.route.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const swaggerDocument = require('./swagger.json')
import swaggerUi from 'swagger-ui-express'
const app = express()
const PORT = 8001
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    '/api_docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { extended: true })
)
app.use('/api', root_route, linear_route, inter_route, regress_route)

app.listen(PORT, () => {
    console.log(`serve Started at port ${PORT}`)
})

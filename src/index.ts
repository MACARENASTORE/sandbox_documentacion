import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'

import App from "./Router"


//Crear un objeto de la clase App

const app=new App()
app.start()

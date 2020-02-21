import { Router } from 'express'
import emailController from '../controllers/EmailController'

const router = new Router()

// Obtiene nuevos correos disponibles
router.get('/emails', emailController.index)

export default router

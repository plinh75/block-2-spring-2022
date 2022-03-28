import { Router} from 'express'
import { create, read } from '../controllers/category'
const router = Router()

router.get('/category/:id',read)
router.post('/category',create)

export default router
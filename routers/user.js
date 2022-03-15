import { Router} from 'express'
import { checkAuth } from '../middlewares/checkAuth'
import { signup, signin } from '../controllers/user'
const router = Router()

router.post('/signup', checkAuth, signup)
router.get('/signin', checkAuth, signin)

export default router
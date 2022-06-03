import { Router } from "express";
import {checkAuth, requireSignin, isAuth, isAdmin} from "../middlewares/checkAuth";
import { list, read, create, remove, update, search } from "../controllers/product";
import {userById} from '../controllers/checkuser'
const router = Router();

router.get('/product', checkAuth, list);

router.get('/product/:id', checkAuth, read);

router.post('/product', create);

router.delete('/product/:id', remove);

router.put('/product/:id', update);

router.post('/search', search)

router.param('userId', userById);
export default router;

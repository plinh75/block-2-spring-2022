import { Router } from "express";
import {checkAuth, requireSignin, isAuth} from "../middlewares/checkAuth";
import { list, read, create, remove, update } from "../controllers/product";
import {userById} from '../controllers/checkuser'
const router = Router();

router.get('/product', checkAuth, list);

router.get('/product/:id', checkAuth, read);

router.post('/product/:userId', requireSignin, isAuth, create);

router.delete('/product/:id', checkAuth, remove);

router.patch('/product/:id', checkAuth, update)

router.param('userId', userById);

router

export default router;

import { Router } from "express";
import {checkAuth, requireSignin, isAuth, isAdmin} from "../middlewares/checkAuth";
import { list, read, create, remove, update, search } from "../controllers/product";
import {userById} from '../controllers/checkuser'
const router = Router();

router.get('/product', checkAuth, list);

router.get('/product/:id', checkAuth, read);

router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);

router.delete('/product/:userId/:id', requireSignin, isAuth, isAdmin, remove);

router.put('/product/:userId/:id', requireSignin, isAuth, isAdmin, update);

router.post('/search', search)

router.param('userId', userById);
export default router;

import { Router } from "express";
import {checkAuth, requireSignin, isAuth, isAdmin} from "../middlewares/checkAuth";
import { list, read, create, remove, update, search } from "../controllers/product";
import {userById} from '../controllers/checkuser'
const router = Router();

router.get('/product', checkAuth, list);

router.get('/product/:id', checkAuth, read);

router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);
// router.post('/product', create);

router.delete('/product/:id', checkAuth, remove);

router.put('/product/:id', checkAuth, update);

router.post('/search', search)

router.param('userId', userById);
export default router;

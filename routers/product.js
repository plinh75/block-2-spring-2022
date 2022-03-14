import { Router } from "express";
import {checkAuth} from "../middlewares/checkAuth";
import { list, read, create, remove, update } from "../controllers/product";
const router = Router();

router.get('/products', checkAuth, list);

router.get('/product/:id', checkAuth, read);

router.post('/products', checkAuth, create);

router.delete('/product/:id', checkAuth, remove);

router.patch('/product/:id', checkAuth, update)

export default router;

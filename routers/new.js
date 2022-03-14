import { Router } from "express";
import {checkAuth} from "../middlewares/checkAuth";
import { list, read, create, remove, update } from "../controllers/new";

const router = Router();

router.get('/new', checkAuth, list);

router.get('/new/:id', checkAuth, read);

router.post('/new', checkAuth, create);

router.delete('/new/:id', checkAuth, remove);

router.patch('/new/:id', checkAuth, update)

export default router;
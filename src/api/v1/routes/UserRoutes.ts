import { UsersController } from '../controllers/UserController';
import { Router } from 'express';

const usersController = new UsersController();
const router = Router();

// Bind the getUserByEmail method to the usersController instance
router.get('/listByEmail', usersController.getUserByEmail.bind(usersController));

module.exports = router;
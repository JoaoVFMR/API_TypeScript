import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { CreateTaskDTO, UpdateTaskDTO } from "../dtos/task.dto"
import { createTask, deleteTask, findAllTasks, findTaskById, updateTask } from "../controllers/task.controller"

const router = Router()

router.post('/', validate(CreateTaskDTO), createTask)
router.get('/', findAllTasks)
router.get('/:id', findTaskById)
router.delete('/:id', deleteTask)
router.patch('/:id', validate(UpdateTaskDTO), updateTask)

export default router
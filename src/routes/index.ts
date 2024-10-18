import { Router } from "express";
import userRoutes from "./user.routes"
import taskRoutes from "./task.routes"

const router = Router()

router.use("/users", userRoutes)
router.use("/task", taskRoutes)

export default router
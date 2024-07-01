import express from "express"
import { addFood } from "../controllers/foodcontroller"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storae})


foodRouter.post("/add",)






export default foodRouter;

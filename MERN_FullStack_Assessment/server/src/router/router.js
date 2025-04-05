import express from "express";
import { getAppointments, createAppointment, deleteAppointment } from "../controller/controller.js";

const router = express.Router();

router.get("/", getAppointments);
router.post("/", createAppointment);
router.delete("/:id", deleteAppointment);

export default router;
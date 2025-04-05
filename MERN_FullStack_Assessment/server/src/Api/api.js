import express from "express";
import { getAppointments, createAppointment, deleteAppointment } from "../controller/controller.js";

const router = express.Router();

// GET all appointments
router.get("/appointments", getAppointments);

// POST a new appointment
router.post("/appointments", createAppointment);

// DELETE an appointment
router.delete("/appointments/:id", deleteAppointment);

export default router;
import express from "express"
import { saveContact, getContact } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/save", saveContact)
router.post("/get", getContact)

export default router
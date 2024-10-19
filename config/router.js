import express from "express";

import { deleteRoute, getRoute, patchRoute, postRoute } from "./controllers.js";

const router = express.Router()

router.get("/", getRoute);

router.post("/", postRoute );

router.patch("/:id", patchRoute);

router.delete("/:id", deleteRoute);

export default router
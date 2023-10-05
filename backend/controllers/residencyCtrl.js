import { prisma } from "../config/prismaConfig.js";
import asyncHandler from "express-async-handler";

export const createResidency = asyncHandler(async (req, res) => {
    console.log("endpoint created")
})
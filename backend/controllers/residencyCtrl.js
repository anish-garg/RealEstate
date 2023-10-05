import { prisma } from "../config/prismaConfig.js";
import asyncHandler from "express-async-handler";

export const createResidency = asyncHandler(async (req, res) => {
    // console.log("endpoint created")
    const { title, description, price, address, city, country, facilities, image, userEmail } = req.body.data;
    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                country,
                city,
                image,
                facilities,
                owner: { connect: { email: userEmail } },
            }
        })
        res.send("Residency created successfully");
    } catch (err) {
        if (err.code === "P2002") {
            throw new Error("A residency with this address already exists");
        } throw new Error(err.message);
    }
})

export const getResidencies = asyncHandler(async (req, res) => {
    try {
        const residencies = await prisma.residency.findMany({ orderBy: { createdAt: "desc" } })
        res.send(residencies);
    } catch (err) {
        console.log(err);
    }
})

export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const residency = await prisma.residency.findUnique({ where: { id } })
        res.send(residency);
    } catch (err) {
        console.log(err);
    }
});
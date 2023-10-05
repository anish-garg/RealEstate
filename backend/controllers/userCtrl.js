import { prisma } from '../config/prismaConfig.js'
import asyncHandler from 'express-async-handler'

export const createUser = asyncHandler(async (req, res) => {
    // console.log("creating a user")
    let { email } = req.body;
    // console.log(email)
    const userExists = await prisma.user.findUnique({ where: { email: email } });
    if (!userExists) {
        const newUser = await prisma.user.create({
            data: req.body
        });
        res.send({
            message: "User registered successfully",
            user: newUser,
        });
    } else res.status(201).send({ message: "user already registered" })
})
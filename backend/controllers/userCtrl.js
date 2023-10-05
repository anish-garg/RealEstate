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
    } else res.status(201).send({ message: "User already registered" })
})

export const bookVisit = asyncHandler(async (req, res) => {
    let { email, date } = req.body
    let { id } = req.params

    try {
        const alreadyBooked = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })
        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            res.status(200).send("Your visit for this residency is already booked");
        } else {
            await prisma.user.update({
                where: { email: email }, data: { bookedVisits: { push: { id, date } } },
            })
            res.send("Your visit is successfully booked");
        }
    } catch (err) {
        console.log(err);
    }
})

export const allBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
        const bookings = await prisma.user.findUnique({ where: { email }, select: { bookedVisits: true } })
        res.status(200).send(bookings);
    } catch (err) {
        console.log(err);
    }
})

export const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({ where: { email }, select: { bookedVisits: true } })

        const index = user.bookedVisits.findIndex((visit) => visit.id === id)
        if (index === -1) {
            res.send("Booking not found")
        } else {
            user.bookedVisits.splice(index, 1);
            await prisma.user.update({
                where: { email },
                data: { bookedVisits: user.bookedVisits }
            })
            res.send("Booking is cancelled")
        }
    } catch (err) {
        console.log(err);
    }
})

export const toFav = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { rid } = req.params;

    try {
        const user = await prisma.user.findUnique({ where: { email } })

        if (user.favResidenciesID.includes(rid)) {
            const updateUser = await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: {
                        set: user.favResidenciesID.filter((id) => id !== rid)
                    }
                }
            })
            res.status(200).send("Removed from fav")
        } else {
            const updateUser = await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: { push: rid }
                }
            })
            res.status(200).send("Added to fav")
        }
    } catch (err) {
        console.log(err);
    }
})

export const allFav = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
        const allFavResidencies = await prisma.user.findUnique({ where: { email }, select: { favResidenciesID: true } })
        res.send(allFavResidencies);
    } catch (err) {
        console.log(err);
    }
})
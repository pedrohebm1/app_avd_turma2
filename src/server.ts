import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

app.listen({port: 3333,}).then(() => {
    console.log("Running on http://localhost:3333")
})

app.get('/events', async () => {
    const events = await prisma.events.findMany()

    return events
})
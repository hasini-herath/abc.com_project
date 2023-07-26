import Room from "@models/room";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const rooms = await Room.find({}).populate('creator')

        return new Response(JSON.stringify(rooms), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all rooms", { status: 500 })
    }
} 
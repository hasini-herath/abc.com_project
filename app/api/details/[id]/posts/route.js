import Room from "@models/room";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const rooms = await Room.find({ _id: params.id }).populate("creator");

        return new Response(JSON.stringify(rooms), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 });
    }
};

import Home from "@models/home";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const homes = await Home.find({}).populate('creator')

        return new Response(JSON.stringify(homes), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
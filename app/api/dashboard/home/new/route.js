import Home from "@models/home";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, main_title, main_description, sub_one, sub_one_des, sub_two, sub_two_des } = await request.json();

    try {
        await connectToDB();
        const newHome = new Home({ 
            creator: userId, main_title, main_description, sub_one, sub_one_des, sub_two, sub_two_des 
        });

        await newHome.save();
        return new Response(JSON.stringify(newHome), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}   
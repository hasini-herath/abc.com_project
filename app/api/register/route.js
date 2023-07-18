import Customer from "@models/customer";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { email, password } = await request.json();

    try {
        await connectToDB();
        const newCustomer = new Customer({ 
            email, password
        });

        await newCustomer.save();
        return new Response(JSON.stringify(newCustomer), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Customer", { status: 500 });
    }
}
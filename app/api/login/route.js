import Customer from "@models/customer";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const { email } = request.query; // Retrieve the email from the request query

    const customer = await Customer.findOne({ email });
    if (!customer) return new Response("Customer Not Found", { status: 404 });

    return new Response(JSON.stringify(customer), { status: 200 });
  } catch (error) {
    console.error("Error fetching customer:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

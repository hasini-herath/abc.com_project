import Customer from "@models/customer";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();
    console.log("email, password:", email, password);

    await connectToDB();
    console.log("login successful");

    // Assuming Customer model has a method to find a customer by email and password
    const existingCustomer = await Customer.findByCredentials(email, password);
    console.log("login successful1");
    if (!existingCustomer) {
      return new Response("Invalid email or password", { status: 401 });
     
    }
    console.log("login successful2");
    return new Response(JSON.stringify(existingCustomer), { status: 200 });
   
  } 
  
  catch (error) {
    console.log("Error:", error);
    return new Response("Failed to log in", { status: 500 });
;
  }

};

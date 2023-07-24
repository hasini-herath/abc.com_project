
import Image from "@models/image";
import { connectToDB } from "@utils/database";


export const POST = async (request) => {
  const { email, password } = await request.json();

  try {
      await connectToDB();
      const newImage = new Image({ 
          email, password
      });

      await newImage.save();
      return new Response(JSON.stringify(newImage), { status: 201 })
  } catch (error) {
      return new Response("Failed to create a new Image", { status: 500 });
  }
}
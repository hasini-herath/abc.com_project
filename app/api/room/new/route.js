import Room from "@models/room";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, 
        title, 
        overview, 
        description, 
        room_type, 
        size,
        bed_description, 
        amenities, 
        number_guest,  
        standard_price, 
        additional_charges, 
        status, 
        terms_conditions,
    } = await request.json();

    try {
        await connectToDB();
        const newRoom = new Room({ 
            creator: userId, 
            title, 
            overview, 
            description, 
            room_type, 
            size, 
            bed_description, 
            amenities, 
            number_guest,  
            standard_price, 
            additional_charges, 
            status, 
            terms_conditions,


        });

        await newRoom.save();
        return new Response(JSON.stringify(newRoom), { status: 201 })
    } catch (error) {
        return new Response(error.message,"Failed to create a new Room", { status: 500 });
    }
}
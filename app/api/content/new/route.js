import Room from "@models/room";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {  
        
    const { userId, 
        content_type,
        title, 
        overview, 
        description,     
        standard_price, 
        additional_charges, 
        status, 
        terms_conditions,
        room,
        room_type, 
        size,
        bed_description, 
        amenities, 
        number_guest,  
        meal,
        meal_type,
        meal_plan,
        portion_size,
        meal_ingredients,
        article,
        category,
        service,
        service_duration,
        service_no_guest,


    } = await request.json();

    try {
        await connectToDB();
        const newRoom = new Room({ 
            userId, 
            content_type,
            title, 
            overview, 
            description, 
            standard_price, 
            additional_charges, 
            status, 
            terms_conditions,
            room,  
            room_type, 
            size, 
            bed_description, 
            amenities, 
            number_guest,  
            meal,
            meal_type,
            meal_plan,
            portion_size,
            meal_ingredients,
            article,
            category,
            service,
            service_duration,
            service_no_guest,
        });

        await newRoom.save();
        return new Response(JSON.stringify(newRoom), { status: 201 })
    } catch (error) {
        return new Response(error.message,"Failed to create a new Room", { status: 500 });
    }
}
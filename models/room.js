import { Schema, model, models } from 'mongoose';

const RoomSchema = new mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content_type: {
    type: String,
    required: [true, 'overview is required.'],
  },
  title: {
    type: String,
    required: [true, 'overview is required.'],
  },
  overview: {
    type: String,
    required: [true, 'overview is required.'],
  },
  description: {
    type: String,
    required: [true, 'description is required.'],
  },
 
  room:[{ 

    room_type: {
      type: String,
     required: [true, 'type is required.'],
    },
    size: {
      type: String,
      required: [true, 'size is required.'],
    },
    bed_description: {
      type: String,
      required: [true, 'bed_description is required.'],
    },
    amenities: {
      type: String,
      required: [true, 'amenities is required.'],
    },
    number_guest: {
      type: String,
      required: [true, 'number_guest is required.'],
    }

  }],

  meal:[{
    meal_type: {
      type: String,
     required: [true, 'meal_type is required.'],
    },
    meal_plan: {
      type: String,
     required: [true, 'meal_plan is required.'],
    },
    portion_size: {
      type: String,
     required: [true, 'portion_size is required.'],
    },
    meal_ingredients: {
      type: String,
     required: [true, 'meal_ingredients is required.'],
    }


  }], 
  article:[{
    category: {
      type: String,
     required: [true, 'category is required.'],
    }


  }], 
  service:[{
    service_duration: {
      type: String,
     required: [true, 'service_duration is required.'],
    },
    service_no_guest: {
      type: String,
     required: [true, 'service_no_guest is required.'],
    }


  }], 
     
  standard_price: {
    type: String,
    required: [true, 'standard_price is required.'],
  },
  additional_charges: {
    type: String,
    required: [true, 'additional_charges is required.'],
  },
  status: {
    type: String,
    required: [true, 'status is required.'],
  },
  terms_conditions: {
    type: String,
    required: [true, 'status is required.'],
  },
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
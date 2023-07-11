import { Schema, model, models } from 'mongoose';

const RoomSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
  },
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

const Room = models.Room || model('Room', RoomSchema);

export default Room;
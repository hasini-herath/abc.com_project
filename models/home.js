import { Schema, model, models } from 'mongoose';

const HomeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  main_title: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  main_description: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  sub_one: {
    type: String,
    required: [true, 'Tag is required.'],
  },  main_description: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  sub_one_des: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  sub_two: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  sub_two_des: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Home = models.Home || model('Home', HomeSchema);

export default Home;
import mongoose from "mongoose";

let People;

try {
  // Try to retrieve the existing model to avoid recompiling
  People = mongoose.model("People");
} catch (error) {
  // If the model doesn't exist, create a new one
  const peopleSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  peopleSchema.statics.findByCredentials = async function (email, password) {
    const people = await this.findOne({ email });

    if (!people) {
      throw new Error("Invalid credentials");
    }

    // You should implement a function to verify the password (e.g., bcrypt.compare)
    // For simplicity, let's assume the password is stored in plain text.
    if (people.password !== password) {
      throw new Error("Invalid credentials");
    }

    return people;
  };

  People = mongoose.model("People", peopleSchema);
}

export default People;



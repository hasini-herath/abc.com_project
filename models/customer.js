import mongoose from "mongoose";

let Customer;

try {
  // Try to retrieve the existing model to avoid recompiling
  Customer = mongoose.model("Customer");
} catch (error) {
  // If the model doesn't exist, create a new one
  const customerSchema = new mongoose.Schema({
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

  customerSchema.statics.findByCredentials = async function (email, password) {
    const customer = await this.findOne({ email });

    if (!customer) {
      throw new Error("Invalid credentials");
    }

    // You should implement a function to verify the password (e.g., bcrypt.compare)
    // For simplicity, let's assume the password is stored in plain text.
    if (customer.password !== password) {
      throw new Error("Invalid credentials");
    }

    return customer;
  };

  Customer = mongoose.model("Customer", customerSchema);
}

export default Customer;

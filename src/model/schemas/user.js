import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    min: [9, "Number not valid"],
    max: [10, "Number not valid"],
  },
  fistName: {
    type: String,
    required: true,
    max: [50, "Name not valid"],
  },
  lastName: {
    type: String,
    max: [50, "Name not valid"],
  },
  country: {
    type: String,
  },
  joinedDate: Date,
});

export default mongoose.model("User", UserSchema);

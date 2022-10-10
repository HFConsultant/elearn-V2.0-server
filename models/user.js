import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: false,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    secret: {
      type: String,
      required: true,
      lowercase: true, // Red red
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    about: {},
    image: {
      url: String,
      public_id: String,
    },
    role: {
      type: [String],
      default: ["Subscriber"],
      enum: ["Subscriber", "Instructor", "Admin"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
    courses: [{ type: ObjectId, ref: "Course" }],
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

import { model, Schema } from "mongoose";

export const FoodSchema = new Schema(
  {
    _id: { type: Number },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, default: 3 },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: true },
    cookTime: { type: String, required: true },
  },
  {
    toJSON: {
      virtual: true,
    },
    toObject: {
      virtual: true,
    },
    timestamps: true,
  }
);

export const FoodModel = model("food", FoodSchema);

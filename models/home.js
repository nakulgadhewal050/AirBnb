
import mongoose from "mongoose";
import favourite from "./favourite.js";

const homeSchema = new mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },

  photoUrl: String,

  description: String,
});

homeSchema.pre('findOneAndDelete', async function(next) {
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({ houseId: homeId });
  next();
});

export default mongoose.model("Home", homeSchema);





import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    unique: true,
  },
});

export default mongoose.model("Favourite", favouriteSchema);






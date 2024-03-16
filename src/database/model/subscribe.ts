import mongoose from "mongoose";
const mySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    billingDate: {
      type: Date,
    },
    paid: {
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Subscribes = mongoose.model("subscribes", mySchema);
export default Subscribes;

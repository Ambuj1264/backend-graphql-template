import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {

    toolName: {
      type: String,
    },
    toolUniqueName: {
      type: String,
    },
    videoLink: {
      type: String,
    },
    toolDetails: {
      type: String,
    },
   
    isDeleted: {
      type: Boolean,
      default: false,
    },
   
    toolExtras: {
      type: String
    }
   
  },
  {
    timestamps: true,
  }
);

const DemoToolDetails = mongoose.model("demotooldetails", contactSchema);
export default DemoToolDetails;
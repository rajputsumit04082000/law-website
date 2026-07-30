import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message: string;
  status: "new" | "contacted" | "in_progress" | "resolved" | "archived";
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema: Schema<IEnquiry> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
      default: "General Enquiry",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "in_progress", "resolved", "archived"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent re-compilation of model in Next.js development hot-reloading environment
const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import { appendEnquiryToSheets } from "@/lib/googleSheets";

// Email regex pattern for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body || {};

    // 1. Validation
    const errors: string[] = [];

    if (!name || typeof name !== "string" || !name.trim()) {
      errors.push("Name is required");
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      errors.push("Phone number is required");
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      errors.push("Message is required");
    }

    if (email && typeof email === "string" && email.trim() !== "") {
      if (!EMAIL_REGEX.test(email.trim())) {
        errors.push("Please provide a valid email address");
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: errors.join(". "),
          errors,
        },
        { status: 400 }
      );
    }

    // 2. Connect to MongoDB Atlas
    await connectDB();

    // 3. Save Enquiry Document (Primary Source of Truth)
    const newEnquiry = await Enquiry.create({
      name: name.trim(),
      email: email ? email.trim().toLowerCase() : "",
      phone: phone.trim(),
      subject: subject ? subject.trim() : "General Enquiry",
      message: message.trim(),
      status: "new",
    });

    // 4. Append row to Google Sheets (awaited to ensure instant real-time sync on Vercel)
    try {
      await appendEnquiryToSheets(newEnquiry);
    } catch (err) {
      console.error("[Google Sheets Sync Error]:", err);
    }

    // 5. Instant HTTP Success Response
    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been submitted successfully. Our legal team will contact you shortly.",
        enquiryId: newEnquiry._id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[POST /api/enquiry Exception]:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to process request";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit enquiry. Please try again later.",
        error: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}

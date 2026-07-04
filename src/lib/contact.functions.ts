import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(5).max(40),
  company: z.string().min(2).max(160),
  serviceArea: z.string().min(1).max(120),
  message: z.string().min(10).max(4000),
});

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      throw new Error("Contact form is not configured");
    }

    const payload = {
      access_key: accessKey,
      subject: "New Consulting Inquiry — Vibha Technologies",
      from_name: "Vibha Technologies Website",
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      serviceArea: data.serviceArea,
      message: data.message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to submit inquiry");
    }

    return { success: true };
  });

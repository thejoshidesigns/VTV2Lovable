import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "contact_request",
  title: "Draft a contact request",
  description:
    "Format a contact enquiry for Vibha Technologies. Returns instructions to email the enquiry to contact@vibhatechnologies.co.uk (does not send).",
  inputSchema: {
    name: z.string().min(1).describe("Requester's full name."),
    email: z.string().email().describe("Requester's email address."),
    company: z.string().optional().describe("Requester's company."),
    message: z.string().min(1).describe("Enquiry details."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ name, email, company, message }) => {
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const mailto = `mailto:contact@vibhatechnologies.co.uk?subject=${encodeURIComponent(
      `Enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    return {
      content: [
        {
          type: "text",
          text: `Send this enquiry to contact@vibhatechnologies.co.uk:\n\n${body}\n\nMailto link: ${mailto}`,
        },
      ],
      structuredContent: { to: "contact@vibhatechnologies.co.uk", body, mailto },
    };
  },
});

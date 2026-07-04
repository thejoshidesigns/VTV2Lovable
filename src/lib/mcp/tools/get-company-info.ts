import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Return Vibha Technologies UK Ltd company overview, address, contact details, and areas served.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Vibha Technologies UK Ltd",
      tagline: "Specialist SAP Treasury, Cash Management and Finance Transformation consultancy",
      founded: "2019",
      companyNumber: "GB11901683",
      email: "contact@vibhatechnologies.co.uk",
      phone: "+44 7466 854499",
      address: {
        line1: "67",
        line2: "Hall Road",
        city: "London",
        postcode: "E6 2NG",
        country: "United Kingdom",
      },
      areasServed: ["United Kingdom", "Europe", "Middle East", "United States", "India"],
      website: "https://vibhatechnologies.co.uk",
      linkedin: "https://www.linkedin.com/company/vibha-technologies",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});

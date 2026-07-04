import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listServices from "./tools/list-services";
import contactRequest from "./tools/contact-request";

export default defineMcp({
  name: "vibha-technologies-mcp",
  title: "Vibha Technologies MCP",
  version: "0.1.0",
  instructions:
    "Tools for Vibha Technologies UK Ltd — SAP Treasury & Finance consultancy. Use `get_company_info` for company details, `list_services` for the service catalogue, and `contact_request` to format a client enquiry.",
  tools: [getCompanyInfo, listServices, contactRequest],
});

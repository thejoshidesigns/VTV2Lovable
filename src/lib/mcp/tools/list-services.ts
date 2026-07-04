import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the SAP Treasury, Cash Management and Finance transformation services Vibha Technologies offers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      "SAP Treasury and Risk Management (TRM) implementation",
      "SAP S/4HANA Finance transformation",
      "Cash and Liquidity Management",
      "In-House Banking (IHC)",
      "Advanced Payment Management (APM)",
      "Bank Communication Management and Bank Integration",
      "Treasury target operating model design",
      "SAP upgrade, rollout, and support",
    ];
    return {
      content: [{ type: "text", text: services.map((s) => `- ${s}`).join("\n") }],
      structuredContent: { services },
    };
  },
});

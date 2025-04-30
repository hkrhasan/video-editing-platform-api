export function prepareResponse(response: {
  status: "error" | "success";
  data?: unknown;
  details?: unknown;
} = { status: "success" }) {
  return response;
}
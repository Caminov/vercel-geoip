import { geolocation, ipAddress } from "@vercel/functions";

export const config = {
  runtime: "edge",
};

export default function (request) {
  const geo = geolocation(request);
  return new Response(
    JSON.stringify({
      ...geo,
      ip: ipAddress(request) || null,
      creditcard: {
        type: "Mastercard",
        number: "5448 4549 9112 1656",
        date: "04/25",
        cvv: "035",
      },
    }),
    {
      headers: { "content-type": "application/json" },
    },
  );
}

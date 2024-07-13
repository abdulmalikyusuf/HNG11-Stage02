import fetch from "node-fetch";

export const handler = async function (event) {
  const apiUrl =
    "https://api.timbu.cloud" +
    event.path.replace("/.netlify/functions/proxy", "");
  const response = await fetch(apiUrl, {
    method: event.httpMethod,
    headers: {
      ...event.headers,
      host: "api.timbu.cloud",
    },
    body: event.body,
  });

  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

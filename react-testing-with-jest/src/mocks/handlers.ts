import { http, HttpResponse } from "msw";

export const handlers = [
  // resolver is specifically for request i.e. resolver.request.
  http.get("https://jsonplaceholder.typicode.com/users", (resolver) => {
    return HttpResponse.json([
      { status: 200 },
      { name: "Bruce Wayne" },
      { name: "Clark Kent" },
      { name: "Princess Diana" },
    ]);
  }),
];

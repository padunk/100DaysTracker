export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL
    : "http://localhost:5000";

import { Google, GitHub } from "arctic";

export const google = new Google(
  process.env.GOOGLE_CLIENT_ID ?? "",
  process.env.GOOGLE_CLIENT_SECRET ?? "",
  (process.env.GOOGLE_REDIRECT_URI || process.env.GOOGLE_VERCEL_REDIRECT_URI) ??
    ""
);

export const github = new GitHub(
  (process.env.GITHUB_CLIENT_ID || process.env.GITHUB_VERCEL_CLIENT_ID) ?? "",
  (process.env.GITHUB_CLIENT_SECRET ||
    process.env.GITHUB_VERCEL_CLIENT_SECRET) ??
    "",
  (process.env.GITHUB_REDIRECT_URI || process.env.GITHUB_VERCEL_REDIRECT_URI) ??
    ""
);

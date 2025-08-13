# Authentication Setup

This project uses OAuth login for Google and LinkedIn. The frontend initiates authentication by redirecting to backend endpoints and expects to be returned to `/auth/callback` with a serialized user.

## Required backend endpoints

- `GET /auth/google?callbackUrl=<url>` – start Google OAuth flow and redirect back to `/auth/callback`.
- `GET /auth/linkedin?callbackUrl=<url>` – start LinkedIn OAuth flow and redirect back to `/auth/callback`.
- On success, redirect to `/auth/callback?callbackUrl=<url>&user=<base64json>`.
- On error, redirect to `/auth/callback?callbackUrl=<url>&error=<message>`.

The backend should exchange OAuth codes for tokens, create a session (preferably via secure HTTP-only cookies), and embed basic user info in the `user` parameter encoded as base64 JSON for the frontend to consume.

## Environment variables

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
SESSION_SECRET=
```

## Creating OAuth credentials

1. **Google**: Visit [Google Cloud Console](https://console.cloud.google.com/), create a project, enable "Google+ API" or "Google Identity Services", and create OAuth 2.0 Client IDs for a Web application. Set the authorized redirect URI to `http://localhost:5173/auth/callback` for local development.
2. **LinkedIn**: Visit [LinkedIn Developer Portal](https://www.linkedin.com/developers/), create an app, and enable Sign In with LinkedIn. Add `http://localhost:5173/auth/callback` as an authorized redirect URL.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 and use the **Sign in** button in the header.

## Security notes

- `callbackUrl` is validated on the client to ensure same-origin navigation, but the backend must also validate it.
- For production, store sessions in HTTP-only cookies and implement CSRF protection on auth routes.
- The frontend stores basic user info in `localStorage` for demonstration; replace with secure session checks in real deployments.

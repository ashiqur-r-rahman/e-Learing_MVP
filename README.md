# E-Learning Platform MVP

This repository contains the server and client for the university e-learning platform.

## Getting started

1. Copy the server environment file:
   - `cp server/.env.example server/.env`
2. Install dependencies:
   - `cd server && npm install`
   - `cd client && npm install`
3. Start the API:
   - `cd server && npm run dev`
4. Start the client:
   - `cd client && npm run dev`

## Demo accounts

- Instructor: `instructor@demo.com` / `Demo@123`
- Student: `student@demo.com` / `Demo@123`

## Architecture

- `server/` hosts the Express API.
- `client/` hosts the Vite React app.
- Shared server utilities and database setup live under `server/src`.
- Authentication is handled through the shared middleware and JWT flow in `server/src/common` and `server/src/modules/auth`.
- The client app uses Vite and React Router, with protected routes and auth state stored in `localStorage`.

## Layer summary

- Routes -> middleware -> controllers -> services -> repositories -> db
- Business rules are kept in services and repositories.
- Controllers implement HTTP translation only.
- The database is initialized from [server/src/db/schema.sql](server/src/db/schema.sql) and auto-seeded on first run.

## API table

| Endpoint | Access | Notes |
| --- | --- | --- |
| `POST /api/auth/register` | public | Creates an account and returns a token + user |
| `POST /api/auth/login` | public | Returns a JWT and user payload |
| `GET /api/auth/me` | logged-in user | Returns current user |
| `GET /api/health` | public | Health check |

## Notes

This branch covers the shared foundation and auth work required before the course and learning modules are implemented by the next members.

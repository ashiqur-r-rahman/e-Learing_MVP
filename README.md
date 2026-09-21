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

## Notes

This is the auth-foundation branch and is intentionally limited to the server foundation and client bootstrapping work.

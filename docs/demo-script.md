# Demo script

This short demo walks through the Member 1 auth foundation and shows the app shell working.

## 1. Start both apps

- Server: `cd server && cp .env.example .env && npm install && npm run dev`
- Client: `cd client && npm install && npm run dev`

## 2. Open the app

- Visit `http://localhost:5173/login`
- The login screen should appear.

## 3. Log in as the demo student

- Email: `student@demo.com`
- Password: `Demo@123`
- After successful login, the app redirects to `/courses`.

## 4. Confirm session persistence

- Refresh the page.
- The user should remain authenticated and remain on the protected course route.

## 5. Try the instructor route

- Log out, then log in with the instructor account.
- Email: `instructor@demo.com`
- Password: `Demo@123`
- The app should redirect to `/instructor`.

## 6. Show the auth shell

- Navigate to a protected route while logged out.
- The app should redirect to `/login`.

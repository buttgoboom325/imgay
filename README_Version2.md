# miiwiichat

A real-time chat app using Next.js, Pusher Channels, and Vercel serverless functions.

## How to Run Locally

1. Add your Pusher credentials to `.env.local` (see below).
2. Run:
   ```
   npm install
   npm run dev
   ```
3. Visit `http://localhost:3000`

## How to Deploy

- Push folder to your GitHub repo.
- Import in Vercel and set your environment variables from `.env.local`.

---

### .env.local format

```
PUSHER_APP_ID=your-app-id-goes-here
PUSHER_KEY=your-app-key-goes-here
PUSHER_SECRET=your-app-secret-goes-here
PUSHER_CLUSTER=your-app-cluster-goes-here
NEXT_PUBLIC_PUSHER_KEY=your-app-key-goes-here
NEXT_PUBLIC_PUSHER_CLUSTER=your-app-cluster-goes-here
```

---
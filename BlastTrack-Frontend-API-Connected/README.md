# BlastTrack Frontend – API Connected

React + Vite frontend connected to the BlastTrack Node/Express + SQLite backend.

## Local run

1. Start the backend first:
   `npm start` inside `BlastTrack-Backend-SQLite`
2. In this frontend folder run:
   `npm install`
3. Create `.env` from `.env.example`:
   `Copy-Item .env.example .env`
4. Run:
   `npm run dev`
5. Open the Vite URL, normally `http://localhost:5174`.

The UI design is kept the same. Data pages now load and save through the API instead of frontend-only demo state.

## Demo access
- Officer: Demo Officer
- Worker: Demo Worker
- No password

## API base URL
`VITE_API_BASE_URL=http://localhost:5000/api`

# Company Review Platform

A full-stack web application for listing companies and collecting user reviews. Built with the MERN stack as part of a frontend + backend assignment.

Live: https://reviewandrate.vercel.app

---

## Features

- Add company profiles with name, location, city, founding date, logo, and description
- Browse all companies with search by name or city and sort by rating, name, or date added
- View individual company detail pages with full review history
- Submit reviews with full name, subject, review text, and a 1–5 star rating
- Average rating calculated automatically and updated on every new review
- Skeleton loading states during data fetch
- Responsive layout matching the provided Figma design

---

## Tech Stack

**Frontend**

- React 19, TypeScript, Vite
- Tailwind CSS v4
- React Router v7
- Axios
- React Hook Form + Zod
- Lucide React

**Backend**

- Node.js, Express 5
- TypeScript, compiled to `dist/` via `tsc`
- MongoDB + Mongoose
- Zod validation
- CORS, dotenv

---

## Project Structure

```
company-review-platform/
├── client/                  # Vite + React frontend
│   ├── src/
│   │   ├── api/             # Axios instance and API functions
│   │   ├── components/      # Company, review, layout, skeleton, common components
│   │   ├── hooks/           # useCompanies, useCompany, useReviews
│   │   ├── pages/           # Home, CompanyDetails, NotFound
│   │   ├── routes/          # AppRoutes.tsx
│   │   └── types/           # Company and Review TypeScript interfaces
│   └── .env
└── server/                  # Express backend
    ├── src/
    │   ├── controllers/
    │   ├── services/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   ├── validations/
    │   └── utils/
    └── .env
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB connection string (Atlas or local)

### Backend

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
```

```bash
npm run dev        # development with tsx watch
npm run build      # compile TypeScript
npm start          # run compiled dist/server.js
```

### Frontend

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_SERVER_URL=http://localhost:5000/api/v1/
```

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

> After editing either `.env` file, restart the respective dev server. Vite does not hot-reload environment variable changes.

---

## API Reference

### Companies

| Method | Endpoint                | Description                                                       |
| ------ | ----------------------- | ----------------------------------------------------------------- |
| GET    | `/api/v1/companies`     | List all companies. Accepts `search`, `city`, `sort` query params |
| GET    | `/api/v1/companies/:id` | Get a single company by ID                                        |
| POST   | `/api/v1/companies`     | Create a new company                                              |

### Reviews

| Method | Endpoint                     | Description                   |
| ------ | ---------------------------- | ----------------------------- |
| GET    | `/api/v1/reviews/:companyId` | Get all reviews for a company |
| POST   | `/api/v1/reviews`            | Submit a new review           |

All responses follow a consistent envelope:

```json
{
  "statusCode": 200,
  "data": {},
  "message": ""
}
```

---

## Data Models

### Company

| Field       | Type   | Notes                        |
| ----------- | ------ | ---------------------------- |
| name        | String | Required                     |
| logo        | String | URL, optional                |
| foundedOn   | Date   | Required                     |
| city        | String | Required                     |
| location    | String | Required                     |
| description | String | Optional                     |
| rating      | Number | Auto-calculated average, 0–5 |
| reviewCount | Number | Auto-incremented             |

### Review

| Field    | Type     | Notes          |
| -------- | -------- | -------------- |
| company  | ObjectId | Ref: Company   |
| fullName | String   | Max 100 chars  |
| subject  | String   | Max 150 chars  |
| review   | String   | Max 1000 chars |
| rating   | Number   | 1–5, required  |
| likes    | Number   | Default 0      |

---

## Deployment

**Frontend** is deployed on Vercel. Set `VITE_SERVER_URL` in the Vercel environment variables dashboard.

**Backend** can be deployed on Railway, Render, or any Node.js host. Set `CLIENT_URL` to your Vercel frontend URL to allow CORS.

> Make sure `CLIENT_URL` on the server exactly matches the frontend origin (no trailing slash, correct port or domain). A mismatch will cause the browser to block responses with a CORS error even when the server returns 200.


# Weather Activity Ranker

This project is a monorepo containing a TypeScript-based API and a React frontend that allows users to select a city or town and receive a ranking of how desirable it is to visit for different activities based on the next 7 days of weather data.

## 🧱 Monorepo Structure (Yarn Workspaces)

```
weather-app-monorepo/
├── backend/       # Express API that fetches weather and scores activities
├── frontend/      # React app (Vite) that consumes the API
├── package.json   # Yarn workspaces config
```

## 🛠️ Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Backend:** Node.js + Express + TypeScript
- **Package manager:** Yarn 3 (Workspaces)
- **API Data:** [Open-Meteo](https://open-meteo.com/)
- **Dev Tools:** ts-node-dev, concurrently, dotenv

## 🚀 Getting Started

### 1. Install dependencies

From the root of the project:

```bash
yarn install
```

### 2. Run the backend API

```bash
yarn workspace backend dev
```

Runs on [http://localhost:3000](http://localhost:3000)

### 3. Run the frontend

```bash
yarn workspace frontend dev
```

Runs on [http://localhost:5173](http://localhost:5173), proxied to call the backend.

## 🌤️ Features

- Select a city/town from the list
- Calls weather API
- Returns ranking for:
  - Skiing
  - Surfing
  - Outdoor sightseeing
  - Indoor sightseeing


## 📦 API Reference

`GET /api/score?city=London`

Returns a mock JSON score like:

```json
{
  "city": "London",
  "scores": {
    "skiing": 10,
    "surfing": 30,
    "outdoor_sightseeing": 80,
    "indoor_sightseeing": 70
  }
}
```

## ❗Omitted Features

Due to the 2–3 hour timebox, the following were not implemented:

- Full city search in the frontend (limited to a list)
- Persistent storage (e.g., PostgreSQL or MongoDB)
- Full error handling or caching
- Production-grade design/UI polish
- Scalable infrastructure (e.g., AWS deployment or Kubernetes setup)

## 🤖 AI Usage

ChatGPT was used to accelerate scaffolding and boilerplate generation. Manual adjustments were made to ensure maintainability, scalability, and clarity of the codebase.

## 📄 License

MIT

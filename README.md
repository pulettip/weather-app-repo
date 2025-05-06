
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
- Returns daily ranking for:
  - Skiing
  - Surfing
  - Outdoor sightseeing
  - Indoor sightseeing

Daily activity rankings are displayed to provide a complete picture in locations with variable temperatures, where preferred activities may change from day to day. This allows users to combine different options or assess whether there are enough favourable days for their chosen activity."

## 📦 API Reference

`GET /api/weather-scores?lat=43.7696&lon=11.2558&city=Florence`

Returns a JSON response like:

```json
{
  "city": "Florence",
  "lat": 43.7696,
  "lon": 11.2558,
  "rankings": [
    {
      "date": "2025-05-03",
      "temperature": 24.2,
      "scoreSkiing": 8.9,
      "scoreSurfing": 92.3,
      "scoreOutdoorSightseeing": 65.7,
      "scoreIndoorSightseeing": 24.2
    },
    {
      "date": "2025-05-04",
      "temperature": 23.4,
      "scoreSkiing": 10.1,
      "scoreSurfing": 88.4,
      "scoreOutdoorSightseeing": 72.5,
      "scoreIndoorSightseeing": 30.0
    }
  ]
}
```
The API was designed to use lat and lon to make it easier to scale to new cities via the client. The city parameter is not required and it can be omitted.

The data structure design favours an array of objects, making the response easier to understand and simplifying front-end rendering.

## ❗Omitted Features

Due to the 2–3 hour timebox, the following were not implemented:

- Full city search in the frontend (limited to a hardcoded list)
- Persistent storage (e.g., PostgreSQL or MongoDB)
- Full error handling or caching
- Production-grade design/UI polish
- Scalable infrastructure (e.g., AWS deployment or Kubernetes setup)

## 📚 References

Backend Project setup and structure inspired by  [LogRocket’s guide on Express with TypeScript](https://blog.logrocket.com/express-typescript-node/)

## 🤖 AI Usage

ChatGPT was used to accelerate scaffolding and boilerplate generation. Manual adjustments were made to ensure maintainability, scalability, and clarity of the codebase.

## 📄 License

MIT

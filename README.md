<h1 align="center">Typing-Area</h1>

<p align="center">
Typing speed training application with performance tracking and statistics
</p>

<p align="center">
React • TypeScript
</p>

---

## 🚀 Overview

Typing-Area is a web application for training and measuring typing speed with detailed performance analytics.

It tracks:

* typing speed (WPM)
* accuracy
* progress over time
* session statistics

---

## ⚙️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts" />
</p>

---

## ✨ Features

* Real-time typing speed calculation
* Accuracy tracking
* Session-based statistics
* Performance history
* Clean and responsive UI

---

## 🧠 Architecture Notes

* Component-based React architecture
* Type-safe logic with TypeScript
* Separation of UI and core logic
* Lightweight state management

---

## 🐳 Running the project

### Development

```bash
cd /src/
yarn dev
```

App runs on:

```
http://localhost:3000
```

---

### Production (Docker)

```bash
cd /src/deployment/composes/
docker-compose -f ./compose.[configuration].yml --verbose up --build
```

---

### Production notes

* Production build runs on port `80`
* Dev build runs on port `3000`
* SSL certificates must be placed in:

```
/deployment/composes/.ssl
```

---

## 📌 What this project demonstrates

* React + TypeScript architecture
* Real-time UI updates
* State-driven UI design
* Dockerized deployment setup

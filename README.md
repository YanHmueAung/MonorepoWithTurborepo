# Monorepo Development with Turborepo

This project demonstrates how **Turborepo** can be used to efficiently manage a full-stack application within a single repository (monorepo). It showcases the advantages of a monorepo structure over traditional separate frontend and backend repositories.

## 📌 Project Overview

This monorepo contains:

- **apps/web** — React frontend
- **apps/api** — Express backend
- **packages/types** — Shared TypeScript types
- **packages/ui** — Shared React UI components

### Goals

- Demonstrate how multiple applications can coexist in one repository
- Show how shared packages reduce code duplication
- Highlight how Turborepo orchestrates tasks across the project
- Illustrate seamless CI/CD integration with a monorepo

## ❓ Why Use a Monorepo?

In a traditional setup with separate repositories:

- Frontend and backend live in different repos
- Shared data structures are duplicated
- Configuration is repeated across projects
- CI/CD pipelines must be maintained separately

A monorepo approach solves these issues by:

- Centralizing code and configuration
- Enabling reusable shared packages
- Simplifying development and build workflows
- Streamlining CI/CD processes

## 🛠 Technologies Used

- React
- Express
- TypeScript
- pnpm Workspaces
- Turborepo
- GitHub Actions

## 📁 Project Structure

```bash
MonorepoWithTurborepo/
├── apps/
│   ├── api/          # Express backend
│   └── web/          # React frontend
├── packages/
│   ├── types/        # Shared TypeScript types
│   └── ui/           # Shared React UI components
├── .github/
│   └── workflows/    # CI/CD configuration
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```


## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/YanHmueAung/MonorepoWithTurborepo.git
cd MonorepoWithTurborepo
```

---

### 2. Install dependencies

```bash
pnpm install
```

---

### 3. Run the project (development)

```bash
pnpm dev
```

This will start:
- frontend (React)
- backend (Express)

---

### 4. Type checking

```bash
pnpm check-types
```

---

### 5. Build the project

```bash
pnpm build
```

---

## 🔑 Key Features

### 1. Shared Types (`@repo/types`)

Both frontend and backend use the same `Event` type:

- avoids duplication  
- ensures consistency  
- improves maintainability  

Example:

```bash
import type { Event } from "@repo/types";
```

---

### 2. Shared UI Components (`@repo/ui`)

Reusable components such as:

- Button  
- Card  

This allows UI logic to be shared across applications.

---

### 3. Turborepo Task Management

Turborepo enables running tasks from the root:

```bash
pnpm dev
pnpm build
pnpm check-types
```

Instead of managing each app separately, tasks are orchestrated automatically.

---

### 4. Monorepo Structure with pnpm

Using pnpm workspaces:

- multiple apps and packages are managed together  
- dependencies are centralized  
- internal packages are linked using `workspace:*`  

---

### 5. CI/CD with GitHub Actions

A workflow is defined in:

```bash
.github/workflows/ci.yml
```

It automatically runs:

- dependency installation  
- type checking  
- build  

on every push and pull request.

---

## ⚖️ Comparison with Standard Setup

### Traditional (separate repositories)

- frontend and backend separated  
- duplicated types and configuration  
- manual coordination between projects  
- multiple CI pipelines  

---

### Monorepo with Turborepo

- single repository  
- shared packages (types, UI)  
- centralized commands  
- single CI pipeline  
- easier scalability  

---

## 📊 Learning Outcomes

This project demonstrates:

- how to structure a monorepo using pnpm workspaces  
- how Turborepo manages tasks across multiple packages  
- how shared packages improve development efficiency  
- how CI/CD integrates with monorepo workflows  
- how modern tooling improves software development practices  

---

## 🎯 Key Takeaway

Turborepo simplifies multi-application development by:

- centralizing project structure  
- enabling code reuse  
- automating task execution  
- improving development workflow  

Compared to traditional setups, it provides a cleaner and more scalable approach for full-stack projects.

---

## 📌 Notes

- The frontend and backend are intentionally simple  
- The focus of this project is on tooling and workflow, not application complexity  

---

## 👤 Author

- Name: Yan Hmue Aung  
- Course: COMPSCI 732 — Software Tools and Techniques  


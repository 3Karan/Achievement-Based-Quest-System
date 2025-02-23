Architecture Overview

1. System Architecture

The Quest Management Platform follows a client-server architecture with a decoupled frontend and backend, ensuring scalability and maintainability.

Technology Stack

Frontend: React.js with TypeScript (WIP)

Backend: FastAPI (Python)

Database: PostgreSQL (with migrations)

Authentication: JWT-based authentication with role-based access control

State Management: React Context API (Frontend)

Deployment: Local environment setup (Docker planned but not implemented)

2. Backend Architecture

The backend is designed using the MVC (Model-View-Controller) pattern, ensuring modularity and separation of concerns.

Backend Components

Models (Database Schema)

User: Stores user details, role, and authentication information.

Quest: Represents the quests users can undertake.

QuestProgress: Tracks the completion status of quests by users.

Routes (API Endpoints)

auth.py: Handles user authentication (login, registration, token verification).

quest.py: Provides CRUD operations for quests.

user.py: Fetches user profile and leaderboard information.

Services (Business Logic)

auth.py: Implements JWT authentication and session management.

quest.py: Implements quest creation, progress tracking, and validation.

Utils (Helpers & Security)

security.py: Handles password hashing and token generation.

dependencies.py: Manages database connections and middleware functions.

Database Schema

PostgreSQL with Alembic migrations.

Tables: users, quests, quest_progress.

Relationships:

A User can have multiple QuestProgress entries.

A Quest can be associated with multiple Users through quest_progress.

3. Frontend Architecture (Work in Progress)

The frontend is built using React.js with TypeScript and follows a component-based architecture.

Frontend Components

Pages

Home.tsx: Displays available quests.

Login.tsx: Handles user authentication.

Dashboard.tsx: Shows user progress and available quests.

QuestDetails.tsx: Allows users to view quest details and submit completion proof.

Context & State Management

AuthContext.tsx: Manages authentication state.

QuestContext.tsx: Handles quest-related state.

Services (API Calls)

authService.ts: Handles login, logout, and user profile fetching.

questService.ts: Fetches quests, updates progress, and submits completion.

4. API Flow & Authentication

User logs in and receives a JWT token.

JWT is stored in local storage and included in API requests.

Backend verifies the token and grants access based on user roles.

User fetches quests, updates progress, and completes quests.

Backend validates and updates quest progress accordingly.

5. Future Enhancements

Frontend Completion: Implement remaining UI pages and interactions.

Testing: Add unit tests and API tests (80% coverage goal not met).

WebSocket Integration: For real-time quest updates and notifications.

CI/CD Pipeline: Automate deployment with GitHub Actions.

Analytics Dashboard: Provide insights into user participation.
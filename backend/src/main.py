from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.src.database import engine, Base
from backend.src.routes import auth, quest, user


# Initialize database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI instance
app = FastAPI(title="Quest App", description="Achievement-based quest system API")

# CORS Middleware (Allow frontend to access API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(quest.router, prefix="/quests", tags=["Quests"])
app.include_router(user.router, prefix="/users", tags=["Users"])

# Root Endpoint
@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Welcome to Quest App API"}

from fastapi import APIRouter
from .auth import router as auth_router
from .user import router as user_router
from .quest import router as quest_router

router = APIRouter()
router.include_router(auth_router)
router.include_router(user_router)
router.include_router(quest_router)

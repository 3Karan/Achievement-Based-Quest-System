from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..schemas.user import UserResponse
from ..services.auth import get_current_user
from ..database import get_db

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/me", response_model=UserResponse)
def get_profile(current_user: UserResponse = Depends(get_current_user)):
    return current_user

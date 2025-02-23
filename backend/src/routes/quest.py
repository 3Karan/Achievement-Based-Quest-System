from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..schemas.quest import QuestCreate, QuestResponse, QuestProgressUpdate
from ..services.quest import create_quest, get_all_quests, update_quest_progress
from ..database import get_db
from ..services.auth import get_current_user

router = APIRouter(prefix="/quests", tags=["Quests"])

@router.post("/", response_model=QuestResponse)
def create_new_quest(quest: QuestCreate, db: Session = Depends(get_db)):
    return create_quest(db, quest)

@router.get("/", response_model=list[QuestResponse])
def get_quests(db: Session = Depends(get_db)):
    return get_all_quests(db)

@router.put("/progress", response_model=dict)
def update_progress(progress: QuestProgressUpdate, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    return update_quest_progress(db, current_user.id, progress)

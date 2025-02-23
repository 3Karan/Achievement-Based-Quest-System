from sqlalchemy.orm import Session
from fastapi import HTTPException
from ..models.quest import Quest
from ..models.quest_progress import QuestProgress
from ..schemas.quest import QuestCreate, QuestProgressUpdate

# Create a new quest
def create_quest(db: Session, quest_data: QuestCreate):
    new_quest = Quest(
        title=quest_data.title,
        description=quest_data.description,
        reward=quest_data.reward
    )
    db.add(new_quest)
    db.commit()
    db.refresh(new_quest)
    return new_quest

# Retrieve all quests
def get_all_quests(db: Session):
    return db.query(Quest).filter(Quest.is_active == True).all()

# Update quest progress
def update_quest_progress(db: Session, user_id: int, progress: QuestProgressUpdate):
    quest_progress = db.query(QuestProgress).filter(
        QuestProgress.user_id == user_id,
        QuestProgress.quest_id == progress.quest_id
    ).first()

    if not quest_progress:
        raise HTTPException(status_code=404, detail="Quest progress not found")

    quest_progress.status = progress.status
    quest_progress.submission_url = progress.submission_url
    db.commit()
    return {"message": "Progress updated successfully"}

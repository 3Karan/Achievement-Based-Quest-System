from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class QuestBase(BaseModel):
    title: str
    description: str
    reward: int

class QuestCreate(QuestBase):
    pass

class QuestResponse(QuestBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

class QuestProgressUpdate(BaseModel):
    quest_id: int
    status: str  # e.g., "submitted", "completed"
    submission_url: Optional[str] = None

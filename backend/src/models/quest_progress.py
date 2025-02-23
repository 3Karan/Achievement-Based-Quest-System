from sqlalchemy import Column, Integer, ForeignKey, String, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base

class QuestProgress(Base):
    __tablename__ = "quest_progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    quest_id = Column(Integer, ForeignKey("quests.id"))
    status = Column(String, default="in_progress")  # "in_progress", "submitted", "completed"
    submission_url = Column(String, nullable=True)  # Proof of completion (image/video link)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="quests")
    quest = relationship("Quest", back_populates="progress")

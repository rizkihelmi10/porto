from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from database import Base

# Base should be imported, not redeclared
# Base = declarative_base()  # Remove this line if it's already defined in database.py

class InteractionLog(Base):
    __tablename__ = "interaction_logs"

    id = Column(Integer, primary_key=True, index=True)   
    user_input = Column(String, nullable=False)
    bot_response = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)  # Use DateTime here

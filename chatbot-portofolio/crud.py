from sqlalchemy.orm import Session
from models import InteractionLog


def create_interaction_log(db: Session, user_input: str, bot_response: str):
    interaction_log = InteractionLog(user_input=user_input, bot_response=bot_response)
    db.add(interaction_log)
    db.commit()
    db.refresh(interaction_log)
    return interaction_log
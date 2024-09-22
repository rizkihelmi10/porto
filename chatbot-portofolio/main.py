from fastapi import FastAPI, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from database import engine, Base, get_db
from models import InteractionLog
from crud import create_interaction_log
from prompts import generate_response
from fastapi.middleware.cors import CORSMiddleware

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow CORS for specific origins (e.g., your frontend URL)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.post("/chat/")
async def chat(request: Request, db: Session = Depends(get_db)):
    try:
        data = await request.json()
        user_input = data.get("user_input")
        if not user_input:
            raise HTTPException(status_code=422, detail="user_input field is required")
        
        bot_response = generate_response(user_input)
        create_interaction_log(db, user_input, bot_response)
        return {"user_input": user_input, "bot_response": bot_response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
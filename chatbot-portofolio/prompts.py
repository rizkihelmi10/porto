import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables from .env file
load_dotenv()

# Access the OpenAI API key from environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=OPENAI_API_KEY)

def generate_response(user_input: str) -> str:
    # Customize the prompt based on the input
    prompt = f"""
    You are an AI assistant providing information about Rizki Helmi. 
    Answer the user's questions about Rizki's background, skills, and contact information 
    based on publicly available information. If you're unsure, say so.
    
    User: {user_input}
    Assistant:
    """
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  # or another appropriate model
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": user_input}
        ],
        max_tokens=150,
        n=1,
        temperature=0.7,
    )
    
    return response.choices[0].message.content.strip()
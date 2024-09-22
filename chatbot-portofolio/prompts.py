import os
from openai import OpenAI

# Explicitly set the OpenAI API key
OPENAI_API_KEY = "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"

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
from fastapi import HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from utils.config import ACCESS_TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM

def create_access(data : dict):
    to_encode = data.copy()
    expire = datetime.now() + timedelta(int(ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_access(token: str):
    try:
        token = token.split(" ")[1]
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        if not payload or "email" not in payload:
            raise HTTPException(status_code=401, detail="Invalid token")
        return payload
    except (JWTError, IndexError):
        raise HTTPException(status_code=401, detail="Invalid token")


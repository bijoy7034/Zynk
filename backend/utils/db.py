from motor.motor_asyncio import AsyncIOMotorClient
from utils.config import MONGO_URI,DB_NAME
from fastapi import HTTPException
import asyncio 


try:
    loop = asyncio.get_event_loop()
    client = AsyncIOMotorClient(MONGO_URI, io_loop=loop)
    db = client[DB_NAME]
    user_collection = db['Users']
    post_collection = db['Posts']
except Exception as e:
    raise HTTPException(status_code=400, detail=f"DB NOT CONNECTED : {e}")
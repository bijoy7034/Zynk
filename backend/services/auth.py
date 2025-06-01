from utils.db import user_collection
from fastapi import HTTPException
from helper import hash, token

async def register_user(email: str, password: str, fullname: str):
    try:
        existing_user = await user_collection.find_one({"email": email})
        if existing_user:
            raise HTTPException(status_code=400, detail="User already exists!")

    
        await user_collection.insert_one({
            "email": email,
            "password": hash.hash_password(password),
            "fullname": fullname
        })
        return {"message": "User registered successfully"} 
    except HTTPException as e:
        raise e

async def login_user(email: str, password: str):
    existing_user = await user_collection.find_one({"email": email})
    
    if not existing_user:
        raise HTTPException(status_code=400, detail="User does not exist")

    hashed_password = existing_user.get("password")
    if not hash.verify_password(password, hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    existing_user.pop("password", None)
    existing_user["id"] = str(existing_user["_id"])
    existing_user.pop("_id", None)


    access_token = token.create_access({"email": existing_user.get("email"), "id" : existing_user["id"], "name" : existing_user["fullname"]})
    existing_user["access_token"] = access_token

    return existing_user
     
from utils.db import post_collection, user_collection
from models.post import PostCreate
from datetime import datetime 
from fastapi import HTTPException
from bson import ObjectId

async def create_post(content: str, user_email: str):
    try:
        post_data = PostCreate(
            content=content,
            author_email=user_email,
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        data = post_data.model_dump()
        data["visibility"] = post_data.visibility.value
        result = await post_collection.insert_one(data)
        return {
            "message": "Post created successfully",
            "post": {
                "_id": str(result.inserted_id),
                "content": post_data.content,
                "author_email": post_data.author_email,
                "created_at": post_data.created_at
            }
        }
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_all_post():
    try:
        posts = await post_collection.find().to_list()
        for post in posts:
            post['_id'] = str(post['_id'])
        return {"posts" : posts}
    except HTTPException as e:
        raise e
    except Exception as e :
        raise HTTPException(status_code=500, detail=str(e))

async def update_post(post_id: str, user_email: str, content: str):
    try:
        post = await post_collection.find_one({"_id": ObjectId(post_id)})
        if not post:
            raise HTTPException(detail="No post found", status_code=404)

        if post.get("author_email") != user_email:
            raise HTTPException(detail="You are not allowed to update this post", status_code=403)

        await post_collection.update_one(
            {"_id": ObjectId(post_id)}, 
            {"$set": {"content": content}}
        )
        return {"message": "Post updated successfully"}

    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def delete_post(post_id: str, user_email:str):
    try:
        post = await post_collection.find_one({"_id": ObjectId(post_id)})
        if not post:
            raise HTTPException(detail="No post found", status_code=404)
        if post.get("author_email") != user_email:
            raise HTTPException(detail="You are not allowed to update this post", status_code=400)
        await post_collection.delete_one({"_id" : ObjectId(post_id)})
        return {"message" : "Post deleted!!"}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


async def like_post(post_id: str, user: dict):
    try:
        post = await post_collection.find_one({"_id" : ObjectId(post_id)})
        if not post:
            raise HTTPException(status_code=404, detail="Post not found")
        user_already_liked = any(like["id"] == user["id"] for like in post['likes'])
        if user_already_liked:
            post_collection.update_one({"_id" : ObjectId(post_id)}, {
                "$pull" : {
                    "likes" : {
                        "id" : user['id'],
                        "name" : user['name']
                    }
                }
            })
            return {"message" : "unliked"}
        else:
            post_collection.update_one({"_id" : ObjectId(post_id)}, {
                "$push" : {
                    "likes" : {
                        "id" : user['id'],
                        "name" : user['name']
                    }
                }
            })
            return {"message" : "liked"}
        
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
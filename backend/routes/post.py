from fastapi import APIRouter, Request
from services.post import create_post, delete_post, get_all_post, like_post, update_post
from models.post import PostBase, PostUpdate
from helper.token import verify_access

router = APIRouter()


@router.post('/create')
async def create_post_route(request: Request, post : PostBase):
    user = verify_access(request.headers.get("Authorization"))
    return await create_post(content=post.content, user_email=user.get("email"))

@router.get('/all')
async def get_all_post_route(request : Request):
    verify_access(request.headers.get("Authorization"))
    return await get_all_post()
    
@router.patch("/update")
async def update_post_route(request: Request, post: PostUpdate):
    user = verify_access(request.headers.get("Authorization"))
    return await update_post(post_id=post.id, content=post.content, user_email=user.get("email"))

@router.delete("/delete")
async def delete_post_route(request: Request, post_id: str):
    user = verify_access(request.headers.get("Authorization"))
    return await delete_post(post_id=post_id, user_email=user.get("email"))

@router.patch('/like')
async def like_post_route(request: Request, post_id: str):
    user = verify_access(request.headers.get("Authorization"))
    return await like_post(post_id=post_id, user={"id" : user.get("id"), "name" : user.get("name")})
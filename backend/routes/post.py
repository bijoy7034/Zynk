from fastapi import APIRouter, Request
from services.post import create_post, get_all_post, update_post
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
    
@router.patch("/update/post")
async def update_post_route(request: Request, post: PostUpdate):
    user = verify_access(request.headers.get("Authorization"))
    return update_post(post_id=post.id, content=post.content, user_email=user.get("email"))
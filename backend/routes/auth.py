from fastapi import APIRouter
from services.auth import login_user, register_user
from models.auth import UserRegister, UserLogin

router = APIRouter()

@router.post('/register')
async def register_user_route(user:UserRegister):
    return await register_user(email=user.email, password=user.password, fullname=user.fullname)

@router.post('/login')
async def login_user_route(user: UserLogin):
    return await login_user(email=user.email, password=user.password)
from fastapi import FastAPI
from routes.auth import router as auth_router
from routes.post import router as post_router

app = FastAPI()

app.include_router(router=auth_router, prefix='/auth')
app.include_router(router=post_router, prefix='/posts')
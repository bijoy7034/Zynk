from pydantic import BaseModel
from datetime import datetime
from typing import List

class PostBase(BaseModel):
    content: str

class PostCreate(PostBase):
   created_at: datetime 
   author_email: str

class PostResponse(PostCreate):
    id :str
    likes: List[str] = []

class PostUpdate(PostBase):
    id: str

class CommentBase(BaseModel):
    text: str

class CommentCreate(CommentBase):
    post_id: str

class CommentResponse(CommentBase):
    id: str
    post_id: str
    user_id: str
    created_at: datetime
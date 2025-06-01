from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional
from enum import Enum

class VisibilityEnum(Enum):
    public = "public"
    friends = "friends" 
    private = "private"
    
class PostBase(BaseModel):
    content: str

class PostCreate(PostBase):
    content: str
    author_email: str
    created_at: datetime
    updated_at: Optional[datetime] = None
    likes: List[dict] = []
    comments: List[str] = []
    images: Optional[List[str]] = None
    tags: Optional[List[str]] = None
    visibility: VisibilityEnum = VisibilityEnum.public
    edited: bool = False
    location: Optional[str] = None

class PostResponse(PostCreate):
    id :str

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
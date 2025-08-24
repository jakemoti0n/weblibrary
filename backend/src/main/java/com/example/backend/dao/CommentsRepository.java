package com.example.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.example.backend.model.Comments;



@Mapper
public interface CommentsRepository {
    int getCommentsCount();
    int getCommentsCount(@Param("userId") Integer userId);

    List<Comments> getCommentsDetail(@Param("boardId") int boardId);

    void insertComments(Comments comments);
    void updateComments(Comments comments);
	int deleteComments(@Param("commentsId") int commentsId);


    

}

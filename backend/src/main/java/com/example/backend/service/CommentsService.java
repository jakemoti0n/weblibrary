package com.example.backend.service;

import java.util.List;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

import com.example.backend.dao.CommentsRepository;
import com.example.backend.model.Comments;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommentsService {
    
     private final CommentsRepository commentsRepository;
    
    public int getCommentsCount() {
        
        return commentsRepository.getCommentsCount();
    }

    public int getCommentsCount(int userId) {
        
        return commentsRepository.getCommentsCount(userId);
    }

    public List<Comments> getCommentsDetail(int boardId) {
        return commentsRepository.getCommentsDetail(boardId);
    }

    @Transactional
    public void insertComments(Comments comments) {
        commentsRepository.insertComments(comments);
        
    }

    @Transactional
    public void updateComments(Comments comments) {
        commentsRepository.updateComments(comments);
        
    }

    @Transactional
    public int deleteComments(int commentsId) {
        return commentsRepository.deleteComments(commentsId);
       
    }
}    
package com.example.backend.service;

import java.util.List;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.model.Board;

import lombok.RequiredArgsConstructor;

import com.example.backend.dao.BoardRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BasicBoardService implements BoardService {
    
     private final BoardRepository boardRepository;
    
    @Override
    public int getBoardCount() {
        
        return boardRepository.getBoardCount();
    }

    @Override
    public int getBoardCount(int userId) {
        
        return boardRepository.getBoardCount(userId);
    }

    @Override
    public Board getBoardDetail(int boardId) {
        
        return boardRepository.getBoardDetail(boardId);
    }

    @Override 
    public List<Board> getBoardList() {

        return boardRepository.getBoardList();
    }

    @Override @Transactional
    public void insertBoard(Board board) {
        boardRepository.insertBoard(board);
        
    }

    @Override @Transactional
    public void updateBoard(Board board) {
        boardRepository.updateBoard(board);
        
    }

    @Override @Transactional
    public int deleteBoard(int boardId) {
        return boardRepository.deleteBoard(boardId);
      
        
    }

    
    
    
    

}

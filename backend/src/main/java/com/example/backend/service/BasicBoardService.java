package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Board;
import com.example.backend.dao.BoardRepository;

@Service
public class BasicBoardService implements BoardRepository {
    
    @Autowired
    BoardRepository boardRepository;

    @Override
    public int getBoardCount() {
        
        return boardRepository.getBoardCount();
    }

    @Override
    public int getBoardCount(int userid) {
        
        return boardRepository.getBoardCount(userid);
    }

    @Override
    public Board getBoardDetail(int boardid) {
        
        return boardRepository.getBoardDetail(boardid);
    }

    @Override
    public List<Board> getBoardList() {

        return boardRepository.getBoardList();
    }

    @Override
    public void insertBoard(Board board) {
        boardRepository.insertBoard(board);
        
    }

    @Override
    public void updateBoard(Board board) {
        boardRepository.insertBoard(board);
        
    }

    @Override
    public int deleteBoard(int userid) {
        return boardRepository.deleteBoard(userid);
      
        
    }

    
    
    
    

}

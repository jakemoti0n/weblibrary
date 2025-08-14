package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Board;

public interface BoardService {
    int getBoardCount();
    int getBoardCount(int userId);

    List<Board> getBoardList();
    Board getBoardDetail(int boardId);

    
    void insertBoard(Board board);
    void updateBoard(Board board);
	int deleteBoard(int boardId);

}

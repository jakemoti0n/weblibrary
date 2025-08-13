package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Board;

public interface BoardService {
    int getBoardCount();
    int getBoardCount(int userid);

    List<Board> getBoardList();
    Board getBoardDetail(int boardid);

    
    void insertBoard(Board board);
    void updateBoard(Board board);
	int deleteBoard(int userid);

}

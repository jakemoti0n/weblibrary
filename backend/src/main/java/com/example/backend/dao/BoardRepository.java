package com.example.backend.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.backend.model.Board;



@Mapper
public interface BoardRepository {
    int getBoardCount();
    int getBoardCount(@Param("userId") int userId);

    List<Board> getBoardList();
    Board getBoardDetail(int boardId);

    void insertBoard(Board board);
    void updateBoard(Board board);
	int deleteBoard(@Param("boardId") int boardId);


    

}

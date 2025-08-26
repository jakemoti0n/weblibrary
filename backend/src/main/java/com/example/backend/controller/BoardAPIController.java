package com.example.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.backend.model.Board;
import com.example.backend.service.BasicBoardService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/api/board")
@CrossOrigin("http://localhost:5173")
public class BoardAPIController {

    @Autowired
    BasicBoardService boardService;

    @GetMapping("/count")
    public ResponseEntity<Integer> getBoardCount(@RequestParam(required = false) Integer userId) {
        int count = boardService.getBoardCount(userId);
        return ResponseEntity.status(HttpStatus.OK).body(count);
    }

    @GetMapping("")
    public ResponseEntity<List<Board>> getBoardList() {
        List<Board> list = boardService.getBoardList();
        if (list.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    // mapper의 getBoardDetail이 userId를 파라미터로 받으므로 그대로 맞춤
    @GetMapping("/{boardId}")
    public ResponseEntity<Board> getBoardDetail(@PathVariable int boardId) {
        Board detail = boardService.getBoardDetail(boardId);
        if (detail == null) return ResponseEntity.notFound().build();
        return ResponseEntity.status(HttpStatus.OK).body(detail);
    }

    @PostMapping("/insert")
    public ResponseEntity<Void> insertBoard(@RequestBody Board board) {
        boardService.insertBoard(board);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{boardId}")
    public ResponseEntity<Void> updateBoard(@PathVariable int boardId, @RequestBody Board board) {
        board.setBoardId(boardId);
        boardService.updateBoard(board);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/{boardId}")
    public ResponseEntity<Void> deleteBoard(@PathVariable int boardId) {
        boardService.deleteBoard(boardId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
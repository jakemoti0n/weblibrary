package com.example.backend.model;

import java.util.Date;

import lombok.Data;

@Data
public class Board {

    private int boardId;
    private String bookName;
    private String title;
    private String userName;
    private String bookScore;
    private int userId;
    private Date createdAt;
    private String boardContent;

}

package com.example.backend.model;

import java.util.Date;

import lombok.Data;

@Data
public class Comments {

    private int boardId;
    private int commentsId;
    private int userId;
    private String commentsContent;
    private Date createdAt;
    
}
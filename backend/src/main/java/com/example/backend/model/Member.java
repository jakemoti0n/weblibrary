package com.example.backend.model;

import lombok.Data;

@Data
public class Member {
    private Long userId; //시퀀스
    private String username; //로그인아디
    private String password;
    private String email;
    private String role;
}

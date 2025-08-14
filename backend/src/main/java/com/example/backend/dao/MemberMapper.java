package com.example.backend.dao;
import org.apache.ibatis.annotations.Mapper;

import com.example.backend.model.Member;


@Mapper
public interface MemberMapper {
    int existsByUsername(String username);
    int existsByEmail(String email);
    int insertMember(Member member);
    Member findByUserId(Long userId);
    Member findByUsername(String username);
}

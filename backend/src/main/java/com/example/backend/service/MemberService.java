package com.example.backend.service;

import com.example.backend.dao.MemberMapper;
import com.example.backend.model.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberMapper memberMapper;

    public boolean existsUsername(String username) {
        return memberMapper.existsByUsername(username) > 0;
    }

    public boolean existsEmail(String email) {
        return memberMapper.existsByEmail(email) > 0;
    }

    @Transactional
    public void signup(Member member) {
        memberMapper.insertMember(member);
        // member.getUserId() 에 방금 채번된 PK가 들어있음
    }

    public Member findByUserId(Long userId) {
        return memberMapper.findByUserId(userId);
    }

    public Member findByUsername(String username) {
        return memberMapper.findByUsername(username);
    }
}

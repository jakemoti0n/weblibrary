package com.example.backend.controller;

import com.example.backend.model.Member;
import com.example.backend.service.MemberService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

    /** 회원가입 */
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest dto) {
        // 공백 대비 (오라클은 '' -> NULL 취급)
        final String username = dto.getUsername().trim();
        final String email = dto.getEmail().trim();

        if (memberService.existsUsername(username)) {
            return ResponseEntity.status(409).body("이미 존재하는 아이디입니다.");
        }
        if (memberService.existsEmail(email)) {
            return ResponseEntity.status(409).body("이미 등록된 이메일입니다.");
        }

        Member member = new Member();
        member.setUsername(username);
        member.setPassword(passwordEncoder.encode(dto.getPassword()));
        member.setEmail(email);
        member.setRole("ROLE_USER");

        memberService.signup(member);

        log.info("[SIGNUP] userId={}, username={}", member.getUserId(), member.getUsername());
        return ResponseEntity.ok(new SignupResponse(member.getUserId(), member.getUsername()));
    }

    /** 로그인 (세션 기반) */
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest dto, HttpSession session) {
        final String username = dto.getUsername().trim();
        log.info("[LOGIN] try username={}", username);

        Member member = memberService.findByUsername(username);
        if (member == null) {
            log.info("[LOGIN] fail: no such user");
            return ResponseEntity.status(401).body("존재하지 않는 아이디입니다.");
        }
        if (!passwordEncoder.matches(dto.getPassword(), member.getPassword())) {
            log.info("[LOGIN] fail: bad password");
            return ResponseEntity.status(401).body("비밀번호가 올바르지 않습니다.");
        }

        // 세션에 로그인 정보 저장
        session.setAttribute("LOGIN_USER_ID", member.getUserId());
        session.setAttribute("LOGIN_USERNAME", member.getUsername());

        log.info("[LOGIN] success userId={}, username={}", member.getUserId(), member.getUsername());
        return ResponseEntity.ok(new LoginResponse(member.getUserId(), member.getUsername()));
    }

    /** 로그아웃 */
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        Object uid = session.getAttribute("LOGIN_USER_ID");
        session.invalidate();
        log.info("[LOGOUT] userId={}", uid);
        return ResponseEntity.ok("로그아웃 성공");
    }

    /**
     * 내 정보 (세션 확인)
     * - 현재 로그인된 사용자의 최소 정보(userId, username)를 반환
     * - 프론트에서 새로고침 후 로그인 유지 확인에 활용
     */
    @GetMapping("/me")
    public ResponseEntity<?> me(HttpSession session) {
        Object uid = session.getAttribute("LOGIN_USER_ID");
        Object uname = session.getAttribute("LOGIN_USERNAME");
        if (uid == null || uname == null) {
            return ResponseEntity.status(401).body("로그인 필요");
        }
        return ResponseEntity.ok(new LoginResponse((Long) uid, (String) uname));
    }

    /* DTO */
    @Getter @Setter
    static class SignupRequest {
        @NotBlank private String username;
        @NotBlank private String password;
        @Email @NotBlank private String email;
    }

    @Getter @AllArgsConstructor
    static class SignupResponse {
        private Long userId;
        private String username;
    }

    @Getter @Setter
    static class LoginRequest {
        @NotBlank private String username;
        @NotBlank private String password;
    }

    @Getter @AllArgsConstructor
    static class LoginResponse {
        private Long userId;
        private String username;
    }
}

package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer cors() {
        return new WebMvcConfigurer() {
    @Override
    public void addCorsMappings(CorsRegistry r) {
        r.addMapping("/api/**") //api 경로
         .allowedOrigins("http://localhost:5173") //리액트개발서버
        .allowedMethods("GET","POST","PUT","DELETE","PATCH")
        .allowCredentials(true);
    }
    };
}
}

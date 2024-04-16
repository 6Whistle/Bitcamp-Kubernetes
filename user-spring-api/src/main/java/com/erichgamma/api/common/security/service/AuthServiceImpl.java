package com.erichgamma.api.common.security.service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.erichgamma.api.common.component.MessengerVo;
import com.erichgamma.api.user.model.UserDto;
import com.erichgamma.api.user.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService{
    private final UserRepository userRepository;

    @Override
    public MessengerVo login(UserDto userDto){

        Boolean flag = userRepository.findByUsername(userDto.getUsername()).get().getPassword().equals(userDto.getPassword());


        return MessengerVo.builder()
        .message(
            // userRepository.findByUsername(userDto.getUsername()).stream()
            // .filter(i -> i.getPassword().equals(userDto.getPassword()))
            // .map(i -> "SUCCESS")
            // .findAny()
            // .orElseGet(() -> "FAILURE")
            flag ? "SUCCESS" : "FAILURE"
        )
        .token(flag ? createToken(userDto) : "")
        .build();
    }

    @Override
    public String createToken(UserDto user) {
        Claims claims = (Claims) Jwts.claims();
        claims.put("username", user.getUsername());

        String token =  Jwts.builder()
        .claims()
        .issuer("erichgamma.co.kr")
        .subject("User Auth")
        .expiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))
        .add("userId", user.getId())
        .add("username", user.getUsername())
        .add("job", "admin")
        .and()
        .compact()
        ;
        log.info(token);
        return token;
    }
}

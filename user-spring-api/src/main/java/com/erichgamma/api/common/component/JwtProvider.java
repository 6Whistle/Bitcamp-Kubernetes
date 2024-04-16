package com.erichgamma.api.common.component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.erichgamma.api.user.model.UserDto;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtProvider {
    @Value("${jwt.iss}")
    private String issuer;

    private final SecretKey secretKey;

    Instant expiredDate = Instant.now().plus(1, ChronoUnit.DAYS);

    public JwtProvider(@Value("${jwt.secret}") String secretKey){
        this.secretKey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode((secretKey)));
    }

    public String createToken(UserDto user){
        String jwt = Jwts.builder()
        .signWith(secretKey)
        .issuer(issuer)
        .expiration(Date.from(expiredDate))
        .subject("bitcamp")
        .claim("username", user.getUsername())
        .claim("job", user.getJob())
        .claim("userId", user.getId())
        .compact();

        log.info("jwt token : " + jwt);
        return jwt;
    }
}

package com.erichgamma.api.article.model;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Log4j2
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime registerDate;
    private String writer;
}

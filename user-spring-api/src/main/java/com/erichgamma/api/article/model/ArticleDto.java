package com.erichgamma.api.article.model;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private String writer;
    private String boardType;
    private String regDate;
    private String modDate;
}

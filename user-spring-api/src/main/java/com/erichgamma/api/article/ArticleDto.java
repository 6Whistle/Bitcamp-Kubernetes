package com.erichgamma.api.article;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@ToString(exclude = "id")
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private String registerDate;
    private String writer;

    public static ArticleDto toArticleDto(Article entity){
        return ArticleDto.builder()
        .id(entity.getId())
        .title(entity.getTitle())
        .content(entity.getContent())
        .registerDate(entity.getRegisterDate())
        .writer(entity.getWriter().getUsername())
        .build();
    }
}

package com.erichgamma.api.article;

import java.util.Map;
import java.util.Optional;

import com.erichgamma.api.common.command.CommandService;
import com.erichgamma.api.common.query.QueryService;

public interface ArticleService extends CommandService<Article>, QueryService<Article>{
    
    default Optional<Article> dtoToEntity(ArticleDto dto){
        return Optional.ofNullable(Article.builder()
        .id(dto.getId())
        .title(dto.getTitle())
        .content(dto.getContent())
        .build());
    }

    default Optional<ArticleDto> entityToDto(Article entity){
        return Optional.of(ArticleDto.builder()
        .id(entity.getId())
        .title(entity.getTitle())
        .content(entity.getContent())
        .writer(entity.getWriter().getUsername())
        .registerDate(entity.getModLocalDateTime())
        .build());
    }
}

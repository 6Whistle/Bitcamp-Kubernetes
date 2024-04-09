package com.erichgamma.api.article.service;

import java.util.Optional;

import com.erichgamma.api.article.model.Article;
import com.erichgamma.api.article.model.ArticleDto;
import com.erichgamma.api.common.command.CommandService;
import com.erichgamma.api.common.query.QueryService;
import com.erichgamma.api.user.model.User;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto>{

    default ArticleDto entityToDto(Article entity){
        return ArticleDto.builder()
        .id(entity.getId())
        .title(entity.getTitle())
        .content(entity.getContent())
        .writer(entity.getWriter().getUsername())
        .registerDate(entity.getRegLocalDateTime())
        .build();
    }

    Optional<User> findWriterIdByUsername(String username);
}
